import { cn } from "@/utils/cn";

function Text({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="text"
			{...props}
			className={cn("text-base/6 text-black/70 sm:text-sm/6", className)}
		/>
	);
}

export { Text };
