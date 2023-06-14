import { useContext, useEffect } from 'react';
import { Context } from '../Wrapper/Wrapper';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import Radiofield from '../Radiofield/Radiofield';
import Textfield from '../Textfield/Textfield';
import PreviousButton from '../PreviousButton/PreviousButton';
import ContinueButton from '../ContinueButton/ContinueButton';
import BasicSelect from '../DropdownMenu/BasicSelect';
import BasicCheckboxGroup from '../CheckboxGroup/BasicCheckboxGroup';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import OptionCardGroup from '../OptionCardGroup/OptionCardGroup';
import FollowUpQuestions from '../FollowUpQuestions/FollowUpQuestions';
import questions from '../../Assets/questions';
import { useErrorController, zipcodeHasError } from '../../Assets/validationFunctions';
import './QuestionComponentContainer.css';

const QuestionComponentContainer = ({
  handleTextfieldChange,
  handleContinueSubmit,
  handleRadioButtonChange,
  handleNoAnswerChange,
  handleIncomeStreamsSubmit,
  handleExpenseSourcesSubmit,
  handleCheckboxChange,
}) => {
  const { formData } = useContext(Context);
  let { id, uuid } = useParams();
  let numberId = Number(id);
  const matchingQuestion = questions[numberId];
  const errorController = useErrorController(
    matchingQuestion.componentDetails.inputError,
    matchingQuestion.componentDetails.inputHelperText,
  );

  const renderTextfieldComponent = (question) => {
    return (
      <Textfield
        componentDetails={question.componentDetails}
        errorController={errorController}
        data={formData}
        handleTextfieldChange={handleTextfieldChange}
      />
    );
  };

  const renderRadiofieldComponent = (question) => {
    return (
      <Radiofield componentDetails={question.componentDetails} handleRadioButtonChange={handleRadioButtonChange} />
    );
  };

  const renderNoAnswerComponent = (question) => {
    return (
      <Radiofield
        componentDetails={question.componentDetails}
        handleRadioButtonChange={handleNoAnswerChange}
        preferNotToAnswer={true}
      />
    );
  };

  const renderBasicCheckboxGroup = (question) => {
    return (
      <BasicCheckboxGroup
        stateVariable={question.componentDetails.inputName}
        options={matchingQuestion.componentDetails.options}
      />
    );
  };

  const renderOptionCardGroup = (question) => {
    return (
      <OptionCardGroup
        stateVariable={question.componentDetails.inputName}
        errorController={errorController}
        options={matchingQuestion.componentDetails.options}
      />
    );
  };

  const renderBasicSelectComponent = (question) => {
    return (
      <BasicSelect
        componentProperties={question.componentDetails.componentProperties}
        options={question.componentDetails.options}
        formDataProperty={question.componentDetails.inputName}
      />
    );
  };

  const createComponent = (component) => {
    const inputName = matchingQuestion.componentDetails.inputName;
    const { followUpQuestions } = matchingQuestion;
    const hasFollowUpQuestions = followUpQuestions && followUpQuestions.length > 0;
    // this is specifically for step 5 error handling
    const isHealthInsuranceQ = matchingQuestion.name === 'healthInsurance';

    return (
      <div className="question-container" id={id}>
        {matchingQuestion.name !== 'referralSource' && <h2 className="question-label">{matchingQuestion.question}</h2>}
        {matchingQuestion.questionDescription && (
          <p className="question-description">{matchingQuestion.questionDescription}</p>
        )}
        {component}
        {shouldRenderFollowUpQuestions(hasFollowUpQuestions, inputName) && (
          <FollowUpQuestions
            matchingQuestion={matchingQuestion}
            submitted={errorController.isSubmitted}
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleExpenseSourcesSubmit={handleExpenseSourcesSubmit}
            handleIncomeStreamsSubmit={handleIncomeStreamsSubmit}
            handleTextfieldChange={handleTextfieldChange}
          />
        )}
        {isHealthInsuranceQ && errorController.showError && (
          <ErrorMessage error={errorController.message(formData[matchingQuestion.name])} />
        )}
        {createPreviousAndContinueButtons()}
      </div>
    );
  };

  const shouldRenderFollowUpQuestions = (hasFollowUpQuestions, inputName) => {
    if (!hasFollowUpQuestions) {
      return false;
    }
    if (inputName === 'zipcode') {
      return !zipcodeHasError(formData.zipcode);
    }
    if (formData[inputName] === true) {
      // this case is for a radio button question where the user selected "yes"
      return true;
    }
    if (formData[inputName] === 'true') {
      // this case is for a radio button with prefer not to answer where the use selected "yes"
      return true;
    }
    if (formData[inputName] === 'other') {
      // this case is for the referral source question where the user selected "other"
      return true;
    }
    if (
      inputName === 'signUpInfo' &&
      (formData.signUpInfo.sendUpdates || formData.signUpInfo.sendOffers) &&
      !formData.signUpInfo.hasUser
    ) {
      return true;
    }

    return false;
  };

  const createPreviousAndContinueButtons = () => {
    //render normal button block if the question isn't the income or expense question OR
    //if the user doesn't have an income/expenses at all,
    //otherwise these buttons will be created in the IncomeBlock/ExpenseBlock components
    const isNotIncomeAndNotExpenseQ = matchingQuestion.name !== 'hasIncome' && matchingQuestion.name !== 'hasExpenses';
    const hasFalsyIncome =
      matchingQuestion.name === 'hasIncome' && formData[matchingQuestion.componentDetails.inputName] === false;
    const hasFalsyExpense =
      matchingQuestion.name === 'hasExpenses' && formData[matchingQuestion.componentDetails.inputName] === false;

    if (isNotIncomeAndNotExpenseQ || hasFalsyIncome || hasFalsyExpense) {
      return (
        <div className="question-buttons">
          <PreviousButton questionName={matchingQuestion.name} />
          <ContinueButton
            handleContinueSubmit={handleContinueSubmit}
            errorController={errorController}
            inputName={matchingQuestion.componentDetails.inputName}
            questionName={matchingQuestion.name}
          />
        </div>
      );
    }
  };

  const renderHeaderAndSubheader = () => {
    if (matchingQuestion.headerType === 'signUpInfo') {
      return (
        <h1 className="sub-header">
          <FormattedMessage
            id="qcc.optional-sign-up-text"
            defaultMessage="Optional: Sign up for benefits updates and/or paid feedback opportunities"
          />
        </h1>
      );
    } else if (matchingQuestion.headerType === 'aboutHousehold') {
      if (matchingQuestion.name === 'hasBenefits' || matchingQuestion.name === 'acuteHHConditions') {
        return (
          <h1 className="sub-header">
            <FormattedMessage
              id="qcc.tell-us-final-text"
              defaultMessage="Tell us some final information about your household."
            />
          </h1>
        );
      } else if (matchingQuestion.name === 'referralSource') {
        return (
          <h1 className="sub-header">
            <FormattedMessage id="questions.referralSource" defaultMessage="How did you hear about this screener?" />
          </h1>
        );
      } else {
        return (
          <h1 className="sub-header">
            <FormattedMessage id="qcc.tell-us-text" defaultMessage="Tell us about your household." />
          </h1>
        );
      }
    }
  };

  return (
    <main className="benefits-form">
      {renderHeaderAndSubheader()}
      {(matchingQuestion.componentDetails.componentType === 'Textfield' &&
        createComponent(renderTextfieldComponent(matchingQuestion))) ||
        (matchingQuestion.componentDetails.componentType === 'Radiofield' &&
          createComponent(renderRadiofieldComponent(matchingQuestion))) ||
        (matchingQuestion.componentDetails.componentType === 'PreferNotToAnswer' &&
          createComponent(renderNoAnswerComponent(matchingQuestion))) ||
        (matchingQuestion.componentDetails.componentType === 'BasicCheckboxGroup' &&
          createComponent(renderBasicCheckboxGroup(matchingQuestion))) ||
        (matchingQuestion.componentDetails.componentType === 'OptionCardGroup' &&
          createComponent(renderOptionCardGroup(matchingQuestion))) ||
        (matchingQuestion.componentDetails.componentType === 'BasicSelect' &&
          createComponent(renderBasicSelectComponent(matchingQuestion)))}
    </main>
  );
};

export default QuestionComponentContainer;
