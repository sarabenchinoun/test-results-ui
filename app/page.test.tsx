import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "./page";

test("Home page renders with correct title and content", async () => {
	const Result = await Page();
	render(Result);

	const heading = screen.getByRole("heading", {
		level: 1,
		name: /home/i,
	});

	expect(heading).toBeDefined();
});
