"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type * as React from "react";

import { cn } from "@/utils/cn";

function Avatar({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
	return (
		<AvatarPrimitive.Root
			className={cn(
				"relative flex size-10 shrink-0 overflow-hidden rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarImage({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
	return (
		<AvatarPrimitive.Image
			className={cn("aspect-square size-full", className)}
			{...props}
		/>
	);
}

function AvatarFallback({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>) {
	return (
		<AvatarPrimitive.Fallback
			className={cn(
				"flex size-full items-center justify-center rounded-full bg-gray-200",
				className,
			)}
			{...props}
		/>
	);
}

export { Avatar, AvatarImage, AvatarFallback };
