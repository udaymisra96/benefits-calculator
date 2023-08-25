export interface Language extends Record<string, string> {
  'header.appName': string;
  'header.selectLang': string;
  'disclaimer.step-header': string;
  'disclaimer.header': string;
  'disclaimer.sub-header': string;
  'disclaimer.body': string;
  'disclaimer.helper-text': string;
  'disclaimer.error': string;
  'disclaimer-label': string;
  'landingPage-and-text': string;
  'startOver-button': string;
  'continue-button': string;
  'qcc.step-text': string;
  'qcc.of-text': string;
  'qcc.optional-sign-up-text': string;
  'qcc.tell-us-text': string;
  'qcc.tell-us-final-text': string;
  'qcc.so-far-text': string;
  'qcc.you-text': string;
  'qcc.hoh-text': string;
  'qcc.createTaxDropdownMenu-label': string;
  'qcc.createTaxDropdownMenu-disabledSelectMenuItemText': string;
  'qcc.createReferralDropdownMenu-label': string;
  'qcc.createReferralDropdownMenu-disabledSelectMenuItemText': string;
  'questions.age': string;
  'questions.age-inputLabel': string;
  'questions.zipcode': string;
  'questions.zipcode-inputLabel': string;
  'questions.zipcode-a': string;
  'questions.zipcode-a-inputLabel': string;
  'questions.zipcode-a-disabledSelectMenuItemText': string;
  'questions.hasBenefits': string;
  'questions.hasBenefits-description': string;
  'questions.hasBenefits-ariaLabel': string;
  'questions.hasBenefits-a': string;
  'questions.hasBenefits-a-ariaLabel': string;
  'questions.healthInsurance': string;
  'questions.student': string;
  'questions.student-ariaLabel': string;
  'questions.student-a': string;
  'questions.student-a-ariaLabel': string;
  'questions.pregnant': string;
  'questions.pregnant-ariaLabel': string;
  'questions.blindOrVisuallyImpaired': string;
  'questions.blindOrVisuallyImpaired-description': string;
  'questions.blindOrVisuallyImpaired-ariaLabel': string;
  'questions.disabled': string;
  'questions.disabled-ariaLabel': string;
  'questions.veteran': string;
  'questions.veteran-ariaLabel': string;
  'questions.hasIncome': string;
  'questions.hasIncome-description': string;
  'questions.hasIncome-ariaLabel': string;
  'questions.hasIncome-a': string;
  'questions.hasIncome-a-ariaLabel': string;
  'questions.hasExpenses': string;
  'questions.hasExpenses-description': string;
  'questions.hasExpenses-ariaLabel': string;
  'questions.hasExpenses-a': string;
  'questions.hasExpenses-a-ariaLabel': string;
  'questions.householdSize': string;
  'questions.householdSize-description': string;
  'questions.householdSize-inputLabel': string;
  'questions.householdData': string;
  'questions.householdData-ariaLabel': string;
  'questions.householdAssets': string;
  'questions.householdAssets-description': string;
  'questions.householdAssets-inputLabel': string;
  'questions.lastTaxFilingYear': string;
  'questions.lastTaxFilingYear-description': string;
  'questions.referralSource': string;
  'questions.referralSource-a': string;
  'questions.referralSource-a-inputLabel': string;
  'questions.signUpInfo': string;
  'questions.signUpInfo-a': string;
  'questions.signUpInfo-a-ariaLabel': string;
  'questions.acuteHHConditions': string;
  'validation-helperText.age': string;
  'validation-helperText.zipcode': string;
  'validation-helperText.healthInsurance': string;
  'validation-helperText.incomeValue': string;
  'validation-helperText.expenseValue': string;
  'validation-helperText.householdSize': string;
  'validation-helperText.assets': string;
  'validation-helperText.hHMemberAge': string;
  'validation-helperText.hhMemberAgeB': string;
  'validation-helperText.hhMemberRelation': string;
  'validation-helperText.hhMemberNoneApply': string;
  'validation-helperText.noneApply': string;
  'validation-helperText.hhMemberIncome': string;
  'validation-helperText.hhMemberExpense': string;
  'validation-helperText.email': string;
  'validation-helperText.lastTaxFilingYear': string;
  'validation-helperText.referralSource': string;
  'validation-helperText.phoneNumber': string;
  'validation-helperText.firstName': string;
  'validation-helperText.lastName': string;
  'validation-helperText.notificationSelection': string;
  'validation-helperText.consentCheckbox': string;
  'validation-helperText.noEmailOrPhoneNumber': string;
  'validation-helperText.benefits': string;
  previousButton: string;
  continueButton: string;
  'radiofield.label-yes': string;
  'radiofield.label-no': string;
  'radiofield.label-preferNotToAnswer': string;
  'householdDataBlock.createFMInputLabel-headOfHH': string;
  'householdDataBlock.createFMInputLabel-person': string;
  'householdDataBlock.createFMInputLabel-age': string;
  'householdDataBlock.createAgeQuestion-how': string;
  'householdDataBlock.createAgeQuestion-how-headOfHH': string;
  'householdDataBlock.createAgeQuestion-zero': string;
  'householdDataBlock.createHOfHRelationQuestion-relation': string;
  'householdDataBlock.createDropdownCompProps-inputLabelText': string;
  'householdDataBlock.createDropdownCompProps-label': string;
  'householdDataBlock.createDropdownCompProps-disabledSelectMenuItemText': string;
  'householdDataBlock.questionHeader': string;
  'householdDataBlock.member-income': string;
  'relationshipOptions.yourself': string;
  'relationshipOptions.child': string;
  'relationshipOptions.fosterChild': string;
  'relationshipOptions.stepChild': string;
  'relationshipOptions.grandChild': string;
  'relationshipOptions.spouse': string;
  'relationshipOptions.parent': string;
  'relationshipOptions.fosterParent': string;
  'relationshipOptions.stepParent': string;
  'relationshipOptions.grandParent': string;
  'relationshipOptions.sisterOrBrother': string;
  'relationshipOptions.stepSisterOrBrother': string;
  'relationshipOptions.boyfriendOrGirlfriend': string;
  'relationshipOptions.domesticPartner': string;
  'relationshipOptions.unrelated': string;
  'relationshipOptions.relatedOther': string;
  'householdDataBlock.createConditionsQuestion-do-these-apply-to-you': string;
  'householdDataBlock.createConditionsQuestion-do-these-apply': string;
  'householdDataBlock.createConditionsQuestion-pick': string;
  'conditionOptions.student': string;
  'conditionOptions.pregnant': string;
  'conditionOptions.blindOrVisuallyImpaired': string;
  'conditionOptions.disabled': string;
  'checkboxGroup.disabledLabel': string;
  'conditionOptions.veteran': string;
  'conditionOptions.noneOfTheseApply': string;
  'householdDataBlock.createFTStudentRadioQuestion-ariaLabel': string;
  'householdDataBlock.createFTStudentRadioQuestion-youQLabel': string;
  'householdDataBlock.createFTStudentRadioQuestion-questionLabel': string;
  'householdDataBlock.createIncomeRadioQuestion-ariaLabel': string;
  'householdDataBlock.createIncomeRadioQuestion-questionLabel': string;
  'householdDataBlock.createIncomeRadioQuestion-questionDescription': string;
  'personIncomeBlock.return-questionLabel': string;
  'personIncomeBlock.return-questionDescription': string;
  'personIncomeBlock.return-addIncomeButton': string;
  'personIncomeBlock.createMenuItems-disabledSelectMenuItem': string;
  'incomeOptions.wages': string;
  'incomeOptions.selfEmployment': string;
  'incomeOptions.unemployment': string;
  'incomeOptions.cashAssistance': string;
  'incomeOptions.childSupport': string;
  'incomeOptions.sSI': string;
  'incomeOptions.sSDisability': string;
  'incomeOptions.sSSurvivor': string;
  'incomeOptions.sSRetirement': string;
  'incomeOptions.sSDependent': string;
  'incomeOptions.cOSDisability': string;
  'incomeOptions.veteran': string;
  'incomeOptions.pension': string;
  'incomeOptions.deferredComp': string;
  'incomeOptions.workersComp': string;
  'incomeOptions.alimony': string;
  'incomeOptions.boarder': string;
  'incomeOptions.gifts': string;
  'incomeOptions.rental': string;
  'incomeOptions.investment': string;
  'personIncomeBlock.createIncomeBlockQuestions-questionLabel': string;
  'personIncomeBlock.createIncomeStreamsDropdownMenu-inputLabel': string;
  'personIncomeBlock.createIncomeAmountTextfield-questionLabel': string;
  'personIncomeBlock.createIncomeAmountTextfield-amountLabel': string;
  'personIncomeBlock.createIncomeStreamFrequencyDropdownMenu-youQLabel': string;
  'personIncomeBlock.createIncomeStreamFrequencyDropdownMenu-questionLabel': string;
  'personIncomeBlock.createIncomeStreamFrequencyDropdownMenu-freqLabel': string;
  'personIncomeBlock.createIncomeStreamFrequencyDropdownMenu-incomeFreqLabel': string;
  'personIncomeBlock.createFrequencyMenuItems-disabledSelectMenuItem': string;
  'personIncomeBlock.createIncomeAmountTextfield-hourly-questionLabel': string;
  'personIncomeBlock.createHoursWorkedTextfield-youQLabel': string;
  'personIncomeBlock.createHoursWorkedTextfield-questionLabel': string;
  'householdDataBlock.createExpenseRadioQuestion-ariaLabel': string;
  'householdDataBlock.createExpenseRadioQuestion-questionLabel': string;
  'householdDataBlock.createExpenseRadioQuestion-questionDescription': string;
  'personExpenseBlock.return-questionLabel': string;
  'personExpenseBlock.return-questionDescription': string;
  'personExpenseBlock.return-addExpenseButton': string;
  'personExpenseBlock.createExpenseBlockQuestions-questionLabel': string;
  'personExpenseBlock.createExpenseDropdownMenu-expenseTypeInputLabel': string;
  'personExpenseBlock.createExpenseMenuItems-disabledSelect': string;
  'expenseOptions.childCare': string;
  'expenseOptions.childSupport': string;
  'expenseOptions.dependentCare': string;
  'expenseOptions.rent': string;
  'expenseOptions.mortgage': string;
  'expenseOptions.heating': string;
  'expenseOptions.cooling': string;
  'expenseOptions.otherUtilities': string;
  'expenseOptions.telephone': string;
  'expenseOptions.internet': string;
  'expenseOptions.auto': string;
  'expenseOptions.medical': string;
  'expenseOptions.studentLoans': string;
  'expenseOptions.creditCard': string;
  'expenseOptions.personalLoan': string;
  'personExpenseBlock.createExpenseFrequencyDropdownMenu-questionLabel': string;
  'personExpenseBlock.createExpenseFrequencyDropdownMenu-expenseFrequencyInputLabel': string;
  'personExpenseBlock.createExpenseFrequencyDropdownMenu-expenseFrequencySelectLabel': string;
  'personExpenseBlock.createExpenseFrequencyMenuItems-disabledSelectMenuItemText': string;
  'personExpenseBlock.createExpenseAmountTextfield-questionLabel': string;
  'personExpenseBlock.createExpenseAmountTextfield-expenseAmountTextfieldLabel': string;
  'incomeBlock.createIncomeBlockQuestions-questionLabel': string;
  'incomeBlock.createIncomeStreamsDropdownMenu-incomeTypeInputLabel': string;
  'incomeBlock.createIncomeStreamsDropdownMenu-incomeTypeSelectLabel': string;
  'incomeBlock.createMenuItems-disabledSelectMenuItemText': string;
  'incomeBlock.createIncomeStreamFrequencyDropdownMenu-questionLabel': string;
  'incomeBlock.createIncomeStreamFrequencyDropdownMenu-incomeFrequencyLabel': string;
  'incomeBlock.createIncomeStreamFrequencyDropdownMenu-incomeFrequencySelectLabel': string;
  'incomeBlock.createFrequencyMenuItems-disabledSelectMenuItemText': string;
  'incomeBlock.createIncomeAmountTextfield-questionLabel': string;
  'incomeBlock.createIncomeAmountTextfield-hourly-questionLabel': string;
  'incomeBlock.createIncomeAmountTextfield-amountLabel': string;
  'incomeBlock.createHoursWorkedTextfield-questionLabel': string;
  'incomeBlock.createHoursWorkedTextfield-amountLabel': string;
  'incomeBlock.return-error-message': string;
  'incomeBlock.return-addIncomeButton': string;
  'expenseBlock.createExpenseBlockQuestions-questionLabel': string;
  'expenseBlock.createExpenseDropdownMenu-expenseTypeInputLabel': string;
  'expenseBlock.createExpenseDropdownMenu-expenseTypeSelectLabel': string;
  'expenseBlock.createExpenseMenuItems-disabledSelectMenuItemText': string;
  'expenseBlock.createExpenseAmountTextfield-questionLabel': string;
  'expenseBlock.createExpenseAmountTextfield-amountLabel': string;
  'expenseBlock.return-error-message': string;
  'expenseBlock.return-addExpenseButton': string;
  'confirmation.return-stepLabel': string;
  'confirmation.return-ofLabel': string;
  'confirmation.return-subheader': string;
  'confirmation.return-questionLabel': string;
  'confirmation.displayAllFormData-personLabel': string;
  'confirmation.displayAllFormData-peopleLabel': string;
  'confirmation.displayAllFormData-yourHouseholdLabel': string;
  'confirmation.editLinkText': string;
  'confirmation.displayAllFormData-householdResourcesText': string;
  'confirmation.displayAllFormData-householdResourcesDescription': string;
  'confirmation.displayAllFormData-zipcodeText': string;
  'confirmation.displayAllFormData-countyText': string;
  'confirmation.displayAllFormData-lastTaxFilingYear': string;
  'confirmation.displayAllFormData-referralSourceText': string;
  'confirmation.headOfHouseholdDataBlock-youText': string;
  'confirmation.headOfHouseholdDataBlock-headOfHouseholdText': string;
  'confirmation.headOfHouseholdDataBlock-conditionsText': string;
  'confirmation.headOfHouseholdDataBlock-studentFulltimeText': string;
  'confirmation.headOfHouseholdDataBlock-studentText': string;
  'confirmation.headOfHouseholdDataBlock-pregnantText': string;
  'confirmation.headOfHouseholdDataBlock-blindOrVisuallyImpairedText': string;
  'confirmation.headOfHouseholdDataBlock-disabledText': string;
  'confirmation.headOfHouseholdDataBlock-veteranText': string;
  'confirmation.headOfHouseholdDataBlock-medicaidText': string;
  'confirmation.headOfHouseholdDataBlock-disabilityRelatedMedicaidText': string;
  'confirmation.headOfHouseholdDataBlock-incomeLabel': string;
  'confirmation.headOfHouseholdDataBlock-expensesLabel': string;
  'confirmation.displayAllFormData-currentHHBenefitsText': string;
  'confirmation.displayAllFormData-healthInsurance': string;
  'confirmation.displayAllFormData-acuteHHConditions': string;
  'confirmation.none': string;
  'confirmation.noIncome': string;
  'confirmation.residenceInfo': string;
  'frequencyOptions.weekly': string;
  'frequencyOptions.biweekly': string;
  'frequencyOptions.monthly': string;
  'frequencyOptions.hourly': string;
  'results-error.header': string;
  'results-error.message': string;
  'results-error.button': string;
  'results.return-screenerIdLabel': string;
  'results.return-programsUpToLabel': string;
  'results.return-perYearOrLabel': string;
  'results.return-perMonthLabel': string;
  'results.share': string;
  'results.share-email': string;
  'results.share-copyLink': string;
  'results.share-copied': string;
  'results.share-header': string;
  'results.return-sendResultsButton': string;
  'results.return-ineligibilityLinkText': string;
  'results.return-goBackToEligibleText': string;
  'results.return-estimatedDeliveryTimeA': string;
  'results.return-estimatedDeliveryTimeB': string;
  'results.displaySubheader-rememberDisclaimerText': string;
  'results.displaySubheader-basedOnInformationText': string;
  'results.displaySubheader-sendResultsDescText': string;
  'results.resultsTable-benefitLabel': string;
  'results.resultsTable-annualValueLabel': string;
  'results.resultsTable-timeToApply': string;
  'results.resultsTable-sorryNoProgramsWereFoundLabel': string;
  'results.resultsRow-applyButton': string;
  'results.resultsRow-expandForEligibilityLink': string;
  'results.resultsRow-applyWithAssistance': string;
  'results.resultsRow-reducedExpensesText': string;
  'results.resultsRow-cashText': string;
  'results.resultsRow-reducedCostText': string;
  'results.returnSignupCitizenFilter': string;
  'results.perYear': string;
  'results.returnToScreenButton': string;
  'filter.filterByCategoryButton': string;
  'filter.filterByEligibility': string;
  'filter.filterEligible': string;
  'filter.filterInEligible': string;
  'filter.filterAlreadyHave': string;
  'filter.filterByCategory': string;
  'filter.filterAllCategories': string;
  'results.displayResultsFilterButtons-benefitPrograms': string;
  'results.displayResultsFilterButtons-urgentNeedsResources': string;
  'loading.return-loadingText': string;
  'results.displaySubheader-loadingDisclaimerText': string;
  'taxYearOptions.noRecentFiling': string;
  'benefitOptions.tanf': string;
  'benefitOptions.wic': string;
  'benefitOptions.snap': string;
  'benefitOptions.lifeline': string;
  'benefitOptions.acp': string;
  'benefitOptions.eitc': string;
  'benefitOptions.coeitc': string;
  'benefitOptions.nslp': string;
  'benefitOptions.ctc': string;
  'benefitOptions.rtdlive': string;
  'benefitOptions.cccap': string;
  'benefitOptions.mydenver': string;
  'benefitOptions.leap': string;
  'referralOptions.testOrProspect': string;
  'referralOptions.searchEngine': string;
  'referralOptions.other': string;
  'signUpOptions.sendUpdates': string;
  'signUpOptions.sendOffers': string;
  'signUp.createFirstNameTextfield-label': string;
  'signUp.createLastNameTextfield-label': string;
  'signUp.createEmailTextfield-label': string;
  'signUp.createPhoneTextfield-label': string;
  'signUp.displayDisclosureSection-consentText': string;
  'signUp.displayDisclosureSection-consentCheck1': string;
  'signUp.displayDisclosureSection-consentCheckLink': string;
  'signUp.displayDisclosureSection-consentCheck4': string;
  'emailResults.displaySubheader-text': string;
  'emailResults.enter-emailLabel': string;
  'emailResults.enter-phoneNumberLabel': string;
  'emailResults.sendButton': string;
  'emailResults.return-signupCompleted': string;
  'emailResults.return-signupCompleted-email': string;
  'emailResults.copy-results-text': string;
  'landingPage.step-header': string;
  'landingPage.body': string;
  'landingPage.firstBulletItem': string;
  'landingPage.publicCharge': string;
  'landingPage.publicChargeLink': string;
  'landingPage-policyText': string;
  'landingPage-additionalTerms': string;
  'healthInsuranceOptions.employer': string;
  'healthInsuranceOptions.private': string;
  'healthInsuranceOptions.medicaid': string;
  'healthInsuranceOptions.medicare': string;
  'healthInsuranceOptions.chp': string;
  'healthInsuranceOptions.none': string;
  'acuteConditionOptions.food': string;
  'acuteConditionOptions.babySupplies': string;
  'acuteConditionOptions.housing': string;
  'acuteConditionOptions.support': string;
  'acuteConditionOptions.childDevelopment': string;
  'acuteConditionOptions.loss': string;
  'acuteConditionOptions.familyPlanning': string;
  'acuteConditionOptions.jobResources': string;
  'acuteConditionOptions.dentalCare': string;
  'acuteConditionOptions.legalServices': string;
  'urgentNeedsTable.visit-website-button': string;
  'urgentNeedsTable.resources-columnHeader': string;
  'urgentNeedsTable.typeOfResource-columnHeader': string;
  'urgentNeedsRow.formatPhoneNumber': string;
  'benefitCategories.cash': string;
  'benefitCategories.foodAndNutrition': string;
  'benefitCategories.childCare': string;
  'benefitCategories.housingAndUtilities': string;
  'benefitCategories.transportation': string;
  'benefitCategories.healthCare': string;
  'benefitCategories.taxCredits': string;
  'benefitCategories.childCareHelperText': string;
  'cashAssistanceBenefits.tanf': string;
  'cashAssistanceBenefits.ssi': string;
  'cashAssistanceBenefits.andcs': string;
  'cashAssistanceBenefits.oap': string;
  'cashAssistanceBenefits.coPropTaxRentHeatCreditRebate': string;
  'foodAndNutritionBenefits.snap': string;
  'foodAndNutritionBenefits.wic': string;
  'foodAndNutritionBenefits.nslp': string;
  'foodAndNutritionBenefits.ede': string;
  'childCareBenefits.cccap': string;
  'childCareBenefits.denverpresc': string;
  'childCareBenefits.coheadstart': string;
  'childCareBenefits.mydenver': string;
  'childCareBenefits.univpresc': string;
  'housingAndUtilities.acp': string;
  'housingAndUtilities.lifeline': string;
  'housingAndUtilities.leap': string;
  'housingAndUtilities.erc': string;
  'transportationBenefits.rtdlive': string;
  'healthCareBenefits.reproductivehealth': string;
  'healthCareBenefits.familyplanning': string;
  'healthCareBenefits.dentallowincseniors': string;
  'taxCreditBenefits.eitc': string;
  'taxCreditBenefits.ctc': string;
  'taxCreditBenefits.coeitc': string;
  'taxCreditBenefits.coctc': string;
  'displayAnnualIncome.annual': string;
  'listAllIncomeStreams.hoursPerWeek': string;
  'filterSection.citizenship': string;
  'filterSection.other': string;
  'filterSection.reset': string;
  'TwoOneOneHeader.aboutUs': string;
  'TwoOneOneHeader.support': string;
  'TwoOneOneHeader.agencies': string;
  'TwoOneOneHeader.resources': string;
  'TwoOneOneHeader.chat': string;
  'TwoOneOneHeader.login': string;
  'footer-header': string;
  'footer-dial-text': string;
  'footer-or-text': string;
  'footer-tollFree-text': string;
  'footer-text-text': string;
  'footer-to-text': string;
  'footer-standardMsg-text': string;
  'footer-chat-text': string;
  'footer-liveChat-text': string;
  'footer-first-paragraph': string;
  'footer-second-paragraph': string;
  'footer-copyright': string;
  'footer-terms-of-service-link': string;
  'footer-twoOneOne-privacy': string;
  'footer-twoOneOne-mfb': string;
  'jeffcoLandingPage-text': string;
  'jeffco-getStarted-button': string;
}
