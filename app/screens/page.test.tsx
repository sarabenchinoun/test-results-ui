import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "./page";
import "@testing-library/jest-dom/vitest";
import { ScreenDetailsOne } from "@/backend/data";

test("Screens page renders with correct title and content", async () => {
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
