import HousingBlock from '../HousingBlock/HousingBlock';
import Radiofield from '../Radiofield/Radiofield';
import Textfield from '../Textfield/Textfield';
import PreviousButton from '../PreviousButton/PreviousButton';
import ContinueButton from '../ContinueButton/ContinueButton';
import IncomeBlock from '../IncomeBlock/IncomeBlock';
import ExpenseBlock from '../ExpenseBlock/ExpenseBlock';
import questions from '../../Assets/questions';
import './QuestionComponentContainer.css';

const QuestionComponentContainer = ({ formData, handleChange, handleSubmit, page, setPage, handleRadioButtonChange, handleIncomeStreamsSubmit, handleExpenseSourcesSubmit, handleHousingSourcesSubmit }) => {
  const matchingQuestion = questions.find((question) => question.id === page);

  const createHousingBlockComponent = () => {
    return (
      <div className='question-container' id={matchingQuestion.id}>
        <p className='question-label'>{matchingQuestion.question}</p>
        {matchingQuestion.questionDescription && <p className='question-description'>{matchingQuestion.questionDescription}</p>}
        <HousingBlock 
          page={page} 
          setPage={setPage} 
          handleHousingSourcesSubmit={handleHousingSourcesSubmit} 
          formData={formData} />
      </div>
    );
  }

  const createTextfieldComponent = () => {
    return (
      <div className='question-container' id={matchingQuestion.id}>
        <p className='question-label'>{matchingQuestion.question}</p>
        {matchingQuestion.questionDescription && <p className='question-description'>{matchingQuestion.questionDescription}</p>}
        <Textfield 
          componentDetails={matchingQuestion.componentDetails}
          formData={formData}
          handleChange={handleChange} />
        <div className='question-buttons'>
          {matchingQuestion.id > 0 && <PreviousButton 
            page={page} 
            setPage={setPage} />}
          <ContinueButton 
            handleSubmit={handleSubmit} 
            inputError={matchingQuestion.componentDetails.inputError}
            formData={formData} 
            inputName={matchingQuestion.componentDetails.inputName} />
        </div>
      </div>
    );
  }

  const createRadiofieldComponent = () => {
    const inputName = matchingQuestion.componentDetails.inputName;
    const { followUpQuestions } = matchingQuestion;
    const hasFollowUpQuestions = followUpQuestions && followUpQuestions.length > 0;
    return (
      <div className='question-container' id={matchingQuestion.id}>
        <p className='question-label'>{matchingQuestion.question}</p>
        {matchingQuestion.questionDescription && <p className='question-description'>{matchingQuestion.questionDescription}</p>}
        <Radiofield
          componentDetails={matchingQuestion.componentDetails}
          formData={formData}
          handleRadioButtonChange={handleRadioButtonChange} />
        {formData[inputName] === true && hasFollowUpQuestions && renderFollowUpQuestions()}
        {createPreviousAndContinueButtons(matchingQuestion)}
      </div>
    ); 
  }

  const renderFollowUpQuestions = () => {
    const { followUpQuestions } = matchingQuestion;
    return followUpQuestions.map((followUp, index) => {
      if (followUp.componentDetails.componentType === 'Radiofield') {
        return <div key={index}>
          <p className='question-label'>{followUp.question}</p>
          <Radiofield
            componentDetails={followUp.componentDetails}
            formData={formData}
            handleRadioButtonChange={handleRadioButtonChange} />
        </div>
      } else if (followUp.componentDetails.componentType === 'IncomeBlock') {
        return <div className='question-container' key={index}>
          <p className='question-label'>{followUp.question}</p>
          <IncomeBlock 
            page={page} 
            setPage={setPage} 
            handleIncomeStreamsSubmit={handleIncomeStreamsSubmit} 
            formData={formData} />
        </div>
      }  else if (followUp.componentDetails.componentType === 'ExpenseBlock') {
        return <div className='question-container' key={index}>
          <p className='question-label'>{followUp.question}</p>
          <ExpenseBlock 
            page={page}
            setPage={setPage}
            handleExpenseSourcesSubmit={handleExpenseSourcesSubmit}
            formData={formData} />
        </div>
      }
    });
  }

  const createPreviousAndContinueButtons = (question) => {
    //render normal button block if the question isn't the income or expense question or if the user doesn't have an income/expenses at all, 
    //otherwise these buttons will be created in the IncomeBlock/ExpenseBlock components
    const isNotIncomeOrExpenseQ = question.id < 10 || question.id >= 12;
    const hasFalsyIncome = question.id === 10 && formData[question.componentDetails.inputName] === false;
    const hasFalsyExpense = question.id === 11 && formData[question.componentDetails.inputName] === false;
    if (isNotIncomeOrExpenseQ || hasFalsyIncome || hasFalsyExpense) {
      return (
        <div className='question-buttons'>
          <PreviousButton
            page={page}
            setPage={setPage} />
          <ContinueButton
            handleSubmit={handleSubmit}
            inputError={matchingQuestion.componentDetails.inputError}
            formData={formData}
            inputName={matchingQuestion.componentDetails.inputName} />
        </div>
      );
    }
  }

  if (matchingQuestion.componentDetails.componentType === 'Textfield') {
    return createTextfieldComponent();
  } else if (matchingQuestion.componentDetails.componentType === 'Radiofield') {
    return createRadiofieldComponent();
  } else if (matchingQuestion.componentDetails.componentType === 'HousingBlock') {
    return createHousingBlockComponent();
  }

}

export default QuestionComponentContainer;