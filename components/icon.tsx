import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import {
	Baby,
	Barcode,
	BuildingOffice,
	Calendar,
	CalendarCheck,
	CheckCircle,
	Circle,
	Dot,
	DotOutline,
	FirstAidKit,
	HourglassMedium,
	Tag,
	User,
	WarningCircle,
} from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/utils/cn";

const Icons = {
	dot: Dot,
	"dot-outline": DotOutline,
	"first-aid-kit": FirstAidKit,
	tag: Tag,
	barcode: Barcode,
	building: BuildingOffice,
	calendar: Calendar,
	"calendar-check": CalendarCheck,
	user: User,
	hourglass: HourglassMedium,
	baby: Baby,
	warning: WarningCircle,
	"check-circle": CheckCircle,
	"x-circle": Circle,
};

interface IconProps extends PhosphorIconProps {
	name: keyof typeof Icons;
}

function Icon({ name, className, ...props }: IconProps) {
	const Comp = Icons[name];
	return <Comp className={cn("shrink-0", className)} {...props} />;
}

export { Icon, type IconProps };
