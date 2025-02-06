import { type VariantProps, tv } from "tailwind-variants";

const badgeVariants = tv({
	base: "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 font-medium text-xs",
	variants: {
		variant: {
			solid: "bg-(--badge-bg-solid) text-(--badge-text-solid)",
			ghost: "bg-(--badge-bg) text-(--badge-text)",
		},
		theme: {
			danger: [
				"[--badge-bg-solid:theme(--color-danger-solid-bg)] [--badge-text-solid:theme(--color-danger-solid-text)]",
				"[--badge-bg:theme(--color-danger-bg)] [--badge-text:theme(--color-danger-text)]",
			],
			warning: [
				"[--badge-bg-solid:theme(--color-warning-solid-bg)] [--badge-text-solid:theme(--color-warning-solid-text)]",
				"[--badge-bg:theme(--color-warning-bg)] [--badge-text:theme(--color-warning-text)]",
			],
			success: [
				"[--badge-bg-solid:theme(--color-success-solid-bg)] [--badge-text-solid:theme(--color-success-solid-text)]",
				"[--badge-bg:theme(--color-success-bg)] [--badge-text:theme(--color-success-text)]",
			],
			info: [
				"[--badge-bg-solid:theme(--color-info-solid-bg)] [--badge-text-solid:theme(--color-info-solid-text)]",
				"[--badge-bg:theme(--color-info-bg)] [--badge-text:theme(--color-info-text)]",
			],
			gray: [
				"[--badge-bg-solid:theme(--color-gray-200)] [--badge-text-solid:theme(--color-gray-500)]",
				"[--badge-bg:theme(--color-gray-200)] [--badge-text:theme(--color-gray-500)]",
			],
		},
	},
	defaultVariants: {
		variant: "solid",
		theme: "gray",
	},
});

interface BadgeProps
	extends React.ComponentProps<"span">,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, theme, variant, ...props }: BadgeProps) {
	return (
		<span className={badgeVariants({ theme, variant, className })} {...props} />
	);
}

export { Badge };
