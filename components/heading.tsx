import { cn } from "@/utils/cn";

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function Heading({ className, level = 1, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return (
		<Element
			{...props}
			className={cn(
				className,
				"font-bold text-2xl/8 text-default sm:text-xl/8",
			)}
		/>
	);
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return (
		<Element
			{...props}
			className={cn(
				className,
				"font-semibold text-base/7 text-default sm:text-sm/6",
			)}
		/>
	);
}
