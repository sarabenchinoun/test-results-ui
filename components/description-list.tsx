import { cn } from "@/utils/cn";

function DescriptionList({ className, ...props }: React.ComponentProps<"dl">) {
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

function DescriptionTerm({
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
				"col-start-1 flex items-center gap-x-3 border-gray-200 border-t pt-3 text-gray-600 first:border-none sm:border-gray-200 sm:border-t sm:py-3",
			)}
		>
			{icon}
			{children}
		</dt>
	);
}

function DescriptionDetails({
	className,
	...props
}: React.ComponentProps<"dd">) {
	return (
		<dd
			{...props}
			className={cn(
				"pt-1 pb-3 text-black sm:border-gray-200 sm:border-t sm:nth-2:border-none sm:py-3",
				className,
			)}
		/>
	);
}

export { DescriptionList, DescriptionTerm, DescriptionDetails };
