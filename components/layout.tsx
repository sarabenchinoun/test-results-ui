import { cn } from "@/utils/cn";

function Layout({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("py-10", className)} {...props} />;
}

function LayoutContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<main>
			<div
				className={cn("mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8", className)}
				{...props}
			/>
		</main>
	);
}

export { Layout, LayoutContent };
