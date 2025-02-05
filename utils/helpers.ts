import type { ScreenStatus } from "@/backend/contract";
import { format } from "date-fns";

export function formatDate({ date }: { date: Date | string }) {
	if (!date) return "";

	try {
		const parsedDate = date instanceof Date ? date : new Date(date);

		return format(parsedDate, "dd MMM yyyy");
	} catch (error) {
		console.error("Date parsing failed:", error);
		return "";
	}
}

export function getScreenStatusTheme(status: ScreenStatus) {
	switch (status) {
		case "received":
			return "info";
		case "completed":
			return "success";
		case "pending-return":
			return "warning";
		default:
			return "gray";
	}
}
