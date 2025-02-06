type ScreenServiceStatus = "FINAL";
type TestType = "CTNG2" | "SYP" | "HIV" | "FINAL";
export type ScreenMetaDataGroup = "order" | "service-user";
export type ScreenMetaDataType = "string" | "date" | "number";
export type ScreenStatus = "received" | "completed" | "pending-return";
export type ScreenServiceLevel = "abnormal" | "normal" | "warning" | "issue";
type ComponentType = "HIV" | "FINAL" | "SYPHILIS" | "CHLAMYDIA" | "GONORRHOEA";

export type SampleType =
	| "urine"
	| "rectal-swab"
	| "vaginal-swab"
	| "fingerprick-blood";

export type ScreenMetaDataKey =
	| "Age"
	| "SkuCode"
	| "LastName"
	| "FirstName"
	| "AssignedSex"
	| "DateOfBirth"
	| "OrderReference"
	| "ServiceProviderName";

type CaseCode =
	| "INVALID"
	| "CLOTTED"
	| "LIPEMIC"
	| "REACTIVE"
	| "DETECTED"
	| "HAEMOLYSED"
	| "UNCONFIRMED"
	| "NOT-DETECTED"
	| "NON-REACTIVE"
	| "INSUFFICIENT"
	| "OUT-OF-PROTOCOL"
	| "OUT-OF-VALIDATION"
	| "CONFIRMED-AB|INVALID-RPR"
	| "DETECTED-CT|DETECTED-NG2"
	| "UNCONFIRMED-AB|INVALID-RPR"
	| "DETECTED-CT|NOT-DETECTED-NG2"
	| "NOT-DETECTED-CT|DETECTED-NG2"
	| "REACTIVE-AB|INSUFFICIENT-RPR"
	| "CONFIRMED-AB|NON-REACTIVE-RPR"
	| "UNCONFIRMED-AB|INSUFFICIENT-RPR"
	| "UNCONFIRMED-AB|NON-REACTIVE-RPR"
	| "NOT-DETECTED-CT|NOT-DETECTED-NG2"
	| "REACTIVE-AB|REACTIVE-RPR-WITH-TITRE"
	| "UNCONFIRMED-AB|REACTIVE-RPR-WITH-TITRE";

export type FakeFetchResponse = {
	message?: string;
	status: 200 | 404 | 409 | 500;
	data: ScreenDetailsResponse | null;
};

export type ScreenListResponse = {
	updatedOn: string;
	kitBarcode: string;
	status: ScreenStatus;
	screenReference: string;
	serviceProviderName: string;
};

export type ScreenDetailsResponse = {
	createdOn: string;
	updatedOn: string;
	kitBarcode: string;
	screenReference: string;
	serviceProviderName: string;

	completedDate: string | null;
	kitReturnedDate: string | null;

	status?: ScreenStatus;

	screenMetaData?: ScreenMetaData[];
	serviceRequests: ScreenServiceRequest[];
};

export type ScreenMetaData = {
	value: string;
	key: ScreenMetaDataKey;
	group: ScreenMetaDataGroup;
	dataType: ScreenMetaDataType;
};

type ScreenServiceRequest = {
	title: string;
	sampleId: string;
	description: string;
	serviceRequestId: number;

	test: TestType;
	sampleType: SampleType;
	results: ScreenServiceResult[];
};

export type ScreenServiceResult = {
	resultId: number;
	description?: string;
	observationDate: string | null;
	verificationDate: string | null;

	caseCode: CaseCode;
	component: ComponentType;
	level: ScreenServiceLevel;
	status: ScreenServiceStatus;
	observations: ScreenServiceObservation[];
};

type ScreenServiceObservation = {
	key: string;
	value: CaseCode;
};
