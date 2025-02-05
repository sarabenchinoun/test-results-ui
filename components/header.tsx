import { cn } from "@/utils/cn";

function Header({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<header>
			<div
				className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
				{...props}
			/>
		</header>
	);
}

function HeaderTitle({ className, ...props }: React.ComponentProps<"h1">) {
	return (
		<h1
			className={cn("font-bold text-3xl text-black tracking-tight", className)}
			{...props}
		/>
	);
}

export { Header, HeaderTitle };
