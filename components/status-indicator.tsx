import { cn } from "@/utils/cn";

interface StatusIndicatorProps {
	theme: "danger" | "warning" | "success" | "info" | "gray";
}

function StatusIndicator({ theme = "gray" }: StatusIndicatorProps) {
	return (
		<div
			className={cn("flex-none rounded-full p-1", {
				"bg-red-500/20": theme === "danger",
				"bg-amber-500/20": theme === "warning",
				"bg-green-500/20": theme === "success",
				"bg-blue-500/20": theme === "info",
				"bg-gray-500/20": theme === "gray",
			})}
		>
			<div
				className={cn("size-1.5 rounded-full", {
					"bg-red-500": theme === "danger",
					"bg-amber-500": theme === "warning",
					"bg-green-500": theme === "success",
					"bg-blue-500": theme === "info",
					"bg-gray-500": theme === "gray",
				})}
			/>
		</div>
	);
}

export { StatusIndicator };
