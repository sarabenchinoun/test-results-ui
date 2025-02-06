import type { ScreenServiceLevel, ScreenStatus } from "@/backend/contract";
import type { IconProps } from "@/components/icon";

export function formatDate(
	date: Date | string | number,
	options: Intl.DateTimeFormatOptions = {},
) {
	const result = new Intl.DateTimeFormat("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		...options,
	});
	return result.format(new Date(date));
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
