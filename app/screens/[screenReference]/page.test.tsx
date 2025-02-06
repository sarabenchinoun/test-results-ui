import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Page from "./page";
import "@testing-library/jest-dom/vitest";
import * as api from "@/backend/api";
import { ScreenDetailsOne } from "@/backend/data";

vi.mock("@/backend/api");

test("Screen page renders with correct title and content", async () => {
	vi.mocked(api.getById).mockResolvedValue({
		status: 200,
		data: ScreenDetailsOne,
	});

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
// This can be improve by adding more tests for handling error
test("Screen page handles 404 error correctly", async () => {
	vi.mocked(api.getById).mockResolvedValue({
		status: 404,
		data: null,
		message: "Screen not found",
	});

	const Result = Page({
		params: Promise.resolve({
			screenReference: "non-existent-screen",
		}),
	});

	await expect(Result).rejects.toThrow();
});

// This can be improve by adding more tests for handling error
test("Screen page handles server error correctly", async () => {
	vi.mocked(api.getById).mockResolvedValue({
		status: 500,
		data: null,
		message: "Server error",
	});

	const Result = Page({
		params: Promise.resolve({
			screenReference: "error-screen",
		}),
	});

	await expect(Result).rejects.toThrow();
});
