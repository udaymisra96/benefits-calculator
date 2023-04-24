export const createDevFormData = (searchParams) => {
  return {
		isTest: true,
		externalID: '',
		agreeToTermsOfService: false,
		zipcode: '80204',
		county: 'Jefferson County',
		startTime: new Date().toJSON(),
		hasExpenses: true,
		expenses: [
			{
				expenseSourceName: 'rent',
				expenseAmount: '3000',
				expenseFrequency: 'monthly',
			},
		],
		householdSize: '2',
		householdData: [
			{
				age: '31',
				relationshipToHH: 'headOfHousehold',
				student: false,
				studentFulltime: false,
				pregnant: true,
				unemployed: false,
				unemployedWorkedInLast18Mos: false,
				blindOrVisuallyImpaired: false,
				disabled: false,
				veteran: false,
				hasIncome: true,
				incomeStreams: [
					{
						incomeStreamName: 'wages',
						incomeAmount: '290',
						incomeFrequency: 'monthly',
					}
				]
			},
			{
				age: '3',
				relationshipToHH: 'child',
				student: false,
				studentFulltime: false,
				pregnant: false,
				unemployed: false,
				unemployedWorkedInLast18Mos: false,
				blindOrVisuallyImpaired: false,
				disabled: false,
				veteran: false,
				hasIncome: false,
				incomeStreams: []
			}
		],
		householdAssets: '0',
		lastTaxFilingYear: '2021',
		hasBenefits: false,
		benefits: {
			tanf: false,
			wic: false,
			snap: false,
			lifeline: false,
			acp: false,
			eitc: false,
			coeitc: false,
			nslp: false,
			ctc: false,
			rtdlive: false,
			cccap: false,
			mydenver: false,
			leap: false,
		},
		healthInsurance: {
			employer: false,
			private: false,
			medicaid: false,
			medicare: false,
			chp: false,
			none: true,
		},
		referralSource: 'gary',
		referrerCode: '',
		otherSource: '',
		signUpInfo: {
			email: 'testabc7874@gmail.com',
			phone: '',
			firstName: 'Test',
			lastName: 'Test',
			sendOffers: true,
			sendUpdates: false,
			commConsent: true,
		},
		urlSearchParams: null,
		isBIAUser: false,
		acuteHHConditions: {
			food: true,
			babySupplies: true,
			housing: true,
			support: true,
			childDevelopment: true,
			loss: true,
			familyPlanning: true,
		},
	};
};
