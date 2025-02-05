// Types
import type {
	FakeFetchResponse,
	ScreenDetailsResponse,
	ScreenListResponse,
} from "./contract";

// Data
import {
	ConcreteScreenReferenceOne,
	ConcreteScreenReferenceThree,
	ConcreteScreenReferenceTwo,
	ScreenDetailsOne,
	ScreenDetailsThree,
	ScreenDetailsTwo,
	Screens,
} from "./data";

/** Returns a list of screens */
export const get = async (): Promise<ScreenListResponse[]> => {
	return new Promise<ScreenListResponse[]>((resolve) => {
		if (isFailure()) {
			throw new Error(
				"An error occurred whilst retrieving the list of screens",
			);
		}

		setTimeout(() => {
			resolve(Screens);
		}, generateResponseTime());
	});
};

/** Returns a list of screens */
export const getById = async (
	screenReference: string,
): Promise<FakeFetchResponse> => {
	return new Promise<FakeFetchResponse>((resolve) => {
		if (isFailure()) {
			resolve({
				data: null,
				status: 500,
				message: "An error occurred whilst retrieving the screen details",
			});
		}

		let screen: ScreenDetailsResponse | null = null;

		if (screenReference === ConcreteScreenReferenceOne) {
			screen = ScreenDetailsOne;
		} else if (screenReference === ConcreteScreenReferenceTwo) {
			screen = ScreenDetailsTwo;
		} else if (screenReference === ConcreteScreenReferenceThree) {
			screen = ScreenDetailsThree;
		} else {
			resolve({
				data: null,
				status: 404,
				message: "Screen reference not found.",
			});
		}

		const responseTime = generateResponseTime();

		setTimeout(() => {
			resolve({ status: 200, data: screen });
		}, responseTime);
	});
};

const generateResponseTime = (): number => {
	const minResponseTime = 1;
	const maxResponseTime = 5;

	const responseTime =
		Math.floor(
			Math.random() * (maxResponseTime - minResponseTime) + minResponseTime,
		) * 1000;

	return responseTime;
};

const isFailure = (): boolean => {
	const minValue = 1;
	const maxValue = 10;

	const failureRate = Math.floor(
		Math.random() * (maxValue - minValue) + minValue,
	);

	return failureRate === 9 || failureRate === 10;
};
