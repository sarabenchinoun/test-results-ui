import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Page from "./page";
import "@testing-library/jest-dom/vitest";
import * as api from "@/backend/api";
import { ScreenDetailsOne, Screens } from "@/backend/data";

vi.mock("@/backend/api");

test("Screens page renders with correct title and content", async () => {
	vi.mocked(api.get).mockResolvedValue(Screens);

	const Result = await Page();
	const screen = render(Result);

	const heading = screen.getByRole("heading", {
		level: 1,
		name: /screen/i,
	});
	expect(heading).toBeDefined();

	const screensList = screen.getByRole("list");
	expect(screensList).toBeDefined();

	const screenItems = screen.getAllByRole("listitem");
	expect(screenItems).toHaveLength(3);

	const firstItem = screenItems[0];

	expect(firstItem).toHaveTextContent(ScreenDetailsOne.serviceProviderName);
	expect(firstItem).toHaveTextContent(
		ScreenDetailsOne.status ?? "pending-return",
	);
	expect(firstItem).toHaveTextContent(ScreenDetailsOne.screenReference);
	expect(firstItem).toHaveTextContent(ScreenDetailsOne.kitBarcode);
	expect(firstItem).toHaveTextContent(ScreenDetailsOne.updatedOn);
});

// This can be improve by adding more tests for handling error
test("Screens page handles error correctly", async () => {
	vi.mocked(api.get).mockRejectedValue(
		new Error("An error occurred whilst retrieving the list of screens"),
	);

	const Result = Page();
	await expect(Result).rejects.toThrow(
		"An error occurred whilst retrieving the list of screens",
	);
});
