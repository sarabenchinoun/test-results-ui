import type { ScreenServiceLevel, ScreenStatus } from "@/backend/contract";
import type { IconProps } from "@/components/icon";
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
type ThemeType = "danger" | "success" | "warning" | "info" | "gray";

const SERVICE_LEVEL_MAP = {
	abnormal: { theme: "danger" as const, icon: "warning" as const },
	normal: { theme: "success" as const, icon: "check-circle" as const },
	warning: { theme: "warning" as const, icon: "warning" as const },
	issue: { theme: "danger" as const, icon: "x-circle" as const },
} as const;

export const getServiceLevelTheme = (level: ScreenServiceLevel): ThemeType =>
	SERVICE_LEVEL_MAP[level]?.theme ?? "gray";

export const getServiceLevelIcon = (
	level: ScreenServiceLevel,
): IconProps["name"] => SERVICE_LEVEL_MAP[level]?.icon ?? "dot";
