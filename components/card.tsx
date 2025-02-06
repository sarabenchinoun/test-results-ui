import { cn } from "@/utils/cn";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

function Card({ children, className }: CardProps) {
	return (
		<div
			className={cn("overflow-hidden rounded-lg bg-inverse shadow", className)}
		>
			{children}
		</div>
	);
}

function CardHeader({ children, className }: CardProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-between gap-x-4 border-gray-900/5 border-b bg-gray-50 p-4",
				className,
			)}
		>
			{children}
		</div>
	);
}

export { Card, CardHeader };
