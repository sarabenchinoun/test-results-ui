import { cn } from "@/utils/cn";

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

function Heading({ className, level = 1, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return (
		<Element
			{...props}
			className={cn(className, "font-bold text-2xl/8 text-black sm:text-xl/8")}
		/>
	);
}

function Subheading({ className, level = 2, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return (
		<Element
			{...props}
			className={cn(
				className,
				"font-semibold text-base/7 text-black sm:text-sm/6",
			)}
		/>
	);
}

export { Heading, Subheading };
