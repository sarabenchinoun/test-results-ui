import { cn } from "@/utils/cn";

export function DescriptionList({
	className,
	...props
}: React.ComponentProps<"dl">) {
	return (
		<dl
			{...props}
			className={cn(
				className,
				"grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6",
			)}
		/>
	);
}

type DescriptionTermProps = React.ComponentProps<"dt"> & {
	children: React.ReactNode;
	icon?: React.ReactNode;
};

export function DescriptionTerm({
	className,
	children,
	icon,
	...props
}: DescriptionTermProps) {
	return (
		<dt
			{...props}
			className={cn(
				className,
				" col-start-1 flex items-center gap-x-3 border-zinc-950/5 border-t pt-3 text-zinc-500 first:border-none sm:border-zinc-950/5 sm:border-t sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5",
			)}
		>
			{icon}
			{children}
		</dt>
	);
}

export function DescriptionDetails({
	className,
	...props
}: React.ComponentProps<"dd">) {
	return (
		<dd
			{...props}
			className={cn(
				"pt-1 pb-3 text-zinc-950 sm:border-zinc-950/5 sm:border-t sm:nth-2:border-none sm:py-3 dark:text-white dark:sm:border-white/5",
				className,
			)}
		/>
	);
}
