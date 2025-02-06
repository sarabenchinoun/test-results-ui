import { cn } from "@/utils/cn";

interface StatusIndicatorProps {
	theme: "danger" | "warning" | "success" | "info" | "gray";
}

function StatusIndicator({ theme = "gray" }: StatusIndicatorProps) {
	return (
		<div
			className={cn("flex-none rounded-full p-1", {
				"bg-danger-bg": theme === "danger",
				"bg-warning-bg": theme === "warning",
				"bg-success-bg": theme === "success",
				"bg-info-bg": theme === "info",
				"bg-gray-500/20": theme === "gray",
			})}
		>
			<div
				className={cn("size-1.5 rounded-full", {
					"bg-danger-solid-bg": theme === "danger",
					"bg-warning-solid-bg": theme === "warning",
					"bg-success-solid-bg": theme === "success",
					"bg-info-solid-bg": theme === "info",
					"bg-gray-500": theme === "gray",
				})}
			/>
		</div>
	);
}

export { StatusIndicator };
