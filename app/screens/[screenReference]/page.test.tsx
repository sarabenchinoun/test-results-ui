import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "./page";
import "@testing-library/jest-dom/vitest";
import { ScreenDetailsOne } from "@/backend/data";

// This test may need multiple runs to pass: It is flaky due the random failure in the api call.
// I didn't have time to cater for making them not flaky.
test("Screen page renders with correct title and content", async () => {
	const Result = await Page({
		params: Promise.resolve({
			screenReference: String(ScreenDetailsOne.screenReference),
		}),
	});
	const screen = render(Result);

	const heading = screen.getByRole("heading", {
		level: 1,
		name: ScreenDetailsOne.screenReference,
	});
	expect(heading).toBeDefined();

	// Verify record summary section
	const recordSummaryHeading = screen.getByRole("heading", {
		level: 2,
		name: /record summary/i,
	});
	expect(recordSummaryHeading).toBeInTheDocument();

	// Verify kit barcode display
	const kitBarcode = screen.getByText(ScreenDetailsOne.kitBarcode);
	expect(kitBarcode).toBeInTheDocument();

	// Verify service provider name
	const serviceProvider = screen.getByText(
		ScreenDetailsOne.serviceProviderName,
	);
	expect(serviceProvider).toBeInTheDocument();

	// Verify test bookings section heading
	const testBookingsHeading = screen.getByRole("heading", {
		level: 2,
		name: /test bookings/i,
	});
	expect(testBookingsHeading).toBeInTheDocument();

	// Verify service requests are displayed
	for (const request of ScreenDetailsOne.serviceRequests ?? []) {
		const requestTitle = screen.getByText(request.title);
		expect(requestTitle).toBeInTheDocument();

		const sampleId = screen.getByText(`Sample ID: #${request.sampleId}`);
		expect(sampleId).toBeInTheDocument();
	}
});
