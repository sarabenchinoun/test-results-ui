import { faker } from "@faker-js/faker";

faker.seed(1);

// Types
import type { ScreenDetailsResponse, ScreenListResponse } from "./contract";

export const ConcreteScreenReferenceOne = "SR8704928";
export const ConcreteScreenReferenceTwo = "SR870434897";
export const ConcreteScreenReferenceThree = "SR835434098";

export const Screens: ScreenListResponse[] = [];

const now = new Date().getFullYear();

const dateOfBirth = faker.date.birthdate();
const age = now - dateOfBirth.getFullYear();

export const ScreenDetailsOne: ScreenDetailsResponse = {
	status: "completed",
	serviceProviderName: faker.company.name(),
	screenReference: ConcreteScreenReferenceOne,
	createdOn: faker.date.past().toDateString(),
	updatedOn: faker.date.past().toDateString(),
	completedDate: faker.date.past().toDateString(),
	kitReturnedDate: faker.date.past().toDateString(),
	kitBarcode: `KC${faker.string.numeric({ length: { min: 8, max: 8 } })}`,
	screenMetaData: [
		{
			key: "SkuCode",
			group: "order",
			dataType: "string",
			value: faker.string.numeric({ length: { min: 8, max: 8 } }),
		},
		{
			group: "order",
			dataType: "string",
			key: "OrderReference",
			value: faker.string.alphanumeric({ length: { min: 8, max: 16 } }),
		},
		{
			group: "order",
			dataType: "number",
			key: "ServiceProviderName",
			value: faker.company.name(),
		},
		{
			key: "DateOfBirth",
			dataType: "number",
			group: "service-user",
			value: dateOfBirth.toDateString(),
		},
		{
			key: "Age",
			dataType: "number",
			group: "service-user",
			value: age.toString(),
		},
		{
			key: "FirstName",
			dataType: "string",
			group: "service-user",
			value: "Reinaldo",
		},
		{
			key: "LastName",
			dataType: "string",
			group: "service-user",
			value: "Thompson",
		},
		{
			key: "AssignedSex",
			dataType: "number",
			group: "service-user",
			value: "MALE",
		},
	],
	serviceRequests: [
		{
			serviceRequestId: faker.number.int({ min: 7000, max: 7999 }),
			sampleId: faker.string.numeric({ length: { min: 8, max: 8 } }),

			test: "CTNG2",
			sampleType: "urine",
			title: "Roche cobas® CT/NG (Dual Screen) on the cobas® 4800/6800/8800",
			description:
				"Roche cobas® CT/NG (Dual Screen) - Urine, vaginal swab, anorectal and oropharyngeal, NAAT PCR.",

			results: [
				{
					status: "FINAL",
					observations: [],
					level: "abnormal",
					component: "FINAL",
					caseCode: "DETECTED-CT|DETECTED-NG2",
					observationDate: faker.date.past().toDateString(),
					verificationDate: faker.date.past().toDateString(),
					resultId: faker.number.int({ min: 10000, max: 10999 }),
					description:
						"The sample tested positive for chlamydia (Chlamydia trachomatis DNA was detected). \r \n The sample tested positive for gonorrhea (Neisseria gonorrhoeae DNA was detected).",
				},
				{
					status: "FINAL",
					observations: [],
					level: "abnormal",
					caseCode: "DETECTED",
					component: "CHLAMYDIA",
					observationDate: faker.date.past().toDateString(),
					verificationDate: faker.date.past().toDateString(),
					resultId: faker.number.int({ min: 10000, max: 10999 }),
					description:
						"The sample tested positive for chlamydia (Chlamydia trachomatis DNA was detected).",
				},
				{
					status: "FINAL",
					observations: [],
					level: "abnormal",
					caseCode: "DETECTED",
					component: "GONORRHOEA",
					observationDate: faker.date.past().toDateString(),
					verificationDate: faker.date.past().toDateString(),
					resultId: faker.number.int({ min: 10000, max: 10999 }),
					description:
						"The sample tested positive for gonorrhea (Neisseria gonorrhoeae DNA was detected).",
				},
			],
		},
		{
			serviceRequestId: faker.number.int({ min: 8000, max: 8999 }),
			sampleId: faker.string.numeric({ length: { min: 8, max: 8 } }),

			test: "HIV",
			sampleType: "fingerprick-blood",
			title: "Roche Elecsys® HIV duo (5th Gen) on the cobas® e411/e601/e801",
			description:
				"Roche Elecsys® HIV duo (5th Gen), 100% clinical sensitivity, 99.63% clinical specificity. Elecsys HIV Duo assay (5th Gen) for the detection of HIV-1 and HIV-2 antibodies and HIV p24 antigen as initial and secondary screening. HIV reactive samples will be repeat tested using the same assay.",

			results: [
				{
					status: "FINAL",
					observations: [],
					level: "normal",
					component: "FINAL",
					caseCode: "NON-REACTIVE",
					observationDate: faker.date.past().toDateString(),
					verificationDate: faker.date.past().toDateString(),
					resultId: faker.number.int({ min: 11000, max: 11999 }),
					description:
						"The sample was non-reactive for HIV (HIV antigen or antibody was not detected). The test is highly accurate 4 weeks after infection.",
				},
			],
		},
		{
			serviceRequestId: faker.number.int({ min: 9000, max: 9999 }),
			sampleId: faker.string.numeric({ length: { min: 8, max: 8 } }),

			test: "SYP",
			sampleType: "fingerprick-blood",
			title: "Roche Elecsys® Syphilis on the cobas® cobas® e411/e601/e801",
			description:
				"Roche Elecsys® Syphilis - Treponema pallidum IgG and IgM, 100% clinical sensitivity, 99.88% clinical specificity. Elecsys Syphilis assay for the detection of Treponema pallidum antibodies. Confirmatory antibody testing will be referred to a third-party laboratory or carried our in-house using an appropriate assay. RPR testing will be carried out in-house using a manual process (enables access of sample dead-volume).",

			results: [
				{
					status: "FINAL",
					observations: [],
					level: "abnormal",
					component: "FINAL",
					caseCode: "REACTIVE-AB|INSUFFICIENT-RPR",
					observationDate: faker.date.past().toDateString(),
					verificationDate: faker.date.past().toDateString(),
					resultId: faker.number.int({ min: 10000, max: 10999 }),
					description:
						"The sample was reactive for Syphilis-specific antibody (reactive EIA). There was insufficient sample remaining to complete the RPR test.",
				},
			],
		},
	],
};

export const ScreenDetailsTwo: ScreenDetailsResponse = {
	serviceRequests: [],
	completedDate: null,
	kitReturnedDate: null,
	status: "pending-return",
	serviceProviderName: faker.company.name(),
	screenReference: ConcreteScreenReferenceTwo,
	createdOn: faker.date.past().toDateString(),
	updatedOn: faker.date.past().toDateString(),
	kitBarcode: `KC${faker.string.numeric({ length: { min: 8, max: 8 } })}`,
	screenMetaData: [
		{
			key: "SkuCode",
			group: "order",
			dataType: "string",
			value: faker.string.numeric({ length: { min: 8, max: 8 } }),
		},
		{
			group: "order",
			dataType: "string",
			key: "OrderReference",
			value: faker.string.alphanumeric({ length: { min: 8, max: 16 } }),
		},
		{
			group: "order",
			dataType: "number",
			key: "ServiceProviderName",
			value: faker.company.name(),
		},
		{
			key: "DateOfBirth",
			dataType: "number",
			group: "service-user",
			value: dateOfBirth.toDateString(),
		},
		{
			key: "Age",
			dataType: "number",
			group: "service-user",
			value: age.toString(),
		},
		{
			key: "FirstName",
			dataType: "string",
			group: "service-user",
			value: "Ricky",
		},
		{
			key: "LastName",
			dataType: "string",
			group: "service-user",
			value: "Harper",
		},
		{
			key: "AssignedSex",
			dataType: "number",
			group: "service-user",
			value: "MALE",
		},
	],
};

export const ScreenDetailsThree: ScreenDetailsResponse = {
	status: "received",
	serviceRequests: [],
	completedDate: null,
	serviceProviderName: faker.company.name(),
	screenReference: ConcreteScreenReferenceThree,
	createdOn: faker.date.past().toDateString(),
	updatedOn: faker.date.past().toDateString(),
	kitReturnedDate: faker.date.past().toDateString(),
	kitBarcode: `KC${faker.string.numeric({ length: { min: 8, max: 8 } })}`,
	screenMetaData: [
		{
			key: "SkuCode",
			group: "order",
			dataType: "string",
			value: faker.string.numeric({ length: { min: 8, max: 8 } }),
		},
		{
			group: "order",
			dataType: "string",
			key: "OrderReference",
			value: faker.string.alphanumeric({ length: { min: 8, max: 16 } }),
		},
		{
			group: "order",
			dataType: "number",
			key: "ServiceProviderName",
			value: faker.company.name(),
		},
		{
			key: "DateOfBirth",
			dataType: "number",
			group: "service-user",
			value: dateOfBirth.toDateString(),
		},
		{
			key: "Age",
			dataType: "number",
			group: "service-user",
			value: age.toString(),
		},
		{
			key: "FirstName",
			dataType: "string",
			group: "service-user",
			value: "Lynette",
		},
		{
			key: "LastName",
			dataType: "string",
			group: "service-user",
			value: "Armstrong",
		},
		{
			key: "AssignedSex",
			dataType: "number",
			group: "service-user",
			value: "FEMALE",
		},
	],
};
