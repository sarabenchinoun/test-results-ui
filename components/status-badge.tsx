import { Icon } from "@/components/icon";

interface StatusBadgeProps {
	status: "completed" | "pending" | "failed";
}

export function StatusBadge({ status }: StatusBadgeProps) {
	const statusConfig = {
		completed: {
			text: "Completed",
			className: "text-success-solid-bg",
		},
		pending: {
			text: "Pending",
			className: "text-warning-solid-bg",
		},
		failed: {
			text: "Failed",
			className: "text-error-solid-bg",
		},
	};

	const config = statusConfig[status];

	return (
		<span className="inline-flex items-center font-medium text-default text-xs">
			<Icon
				name="dot-outline"
				size={28}
				weight="fill"
				className={config.className}
			/>
			{config.text}
		</span>
	);
}
