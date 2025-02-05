import { cn } from "@/utils/cn";

export function Text({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="text"
			{...props}
			className={cn("text-base/6 text-default/70 sm:text-sm/6", className)}
		/>
	);
}
