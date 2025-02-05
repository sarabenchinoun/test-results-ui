import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import { Dot, DotOutline, FirstAidKit } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/utils/cn";

const Icons = {
	dot: Dot,
	"dot-outline": DotOutline,
	"first-aid-kit": FirstAidKit,
};

interface IconProps extends PhosphorIconProps {
	name: keyof typeof Icons;
}

function Icon({ name, className, ...props }: IconProps) {
	const Comp = Icons[name];
	return <Comp className={cn("shrink-0", className)} {...props} />;
}

export { Icon };
