import { cn } from "@/utils/cn";
import type { ElementType } from "react";

interface ContainerProps {
	as?: ElementType;
	className?: string;
	children: React.ReactNode;
}

export function Container({
	as: Component = "div",
	className,
	children,
	...delegated
}: ContainerProps) {
	return (
		<Component
			className={cn("mx-auto px-4 sm:px-6 lg:px-8", className)}
			{...delegated}
		>
			{children}
		</Component>
	);
}
