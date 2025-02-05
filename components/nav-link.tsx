"use client";

import { cn } from "@/utils/cn";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
	className?: string;
	children: React.ReactNode;
}

export function NavLink({ href, ...props }: NavLinkProps) {
	const isActive = useIsActive(href);

	return (
		<Link
			href={href}
			aria-current={isActive ? "page" : undefined}
			className={cn(
				isActive
					? "border-indigo-500 text-gray-900"
					: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
				"inline-flex items-center border-b-2 px-1 pt-1 font-medium text-sm",
			)}
			{...props}
		/>
	);
}

function useIsActive(href: LinkProps["href"]) {
	const pathname = usePathname();
	const activePath = typeof href === "string" ? href : href.pathname;

	if (!activePath) {
		return false;
	}

	if (activePath === "/") {
		return pathname === "/";
	}

	return pathname.startsWith(activePath);
}
