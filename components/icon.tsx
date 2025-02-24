import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import {
	ArrowsClockwise,
	Baby,
	Barcode,
	BuildingOffice,
	Calendar,
	CalendarCheck,
	CaretLeft,
	CaretRight,
	CheckCircle,
	Circle,
	Dot,
	DotOutline,
	FirstAidKit,
	HourglassMedium,
	Package,
	Tag,
	User,
	WarningCircle,
} from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/utils/cn";

const Icons = {
	"calendar-check": CalendarCheck,
	"caret-right": CaretRight,
	"caret-left": CaretLeft,
	"check-circle": CheckCircle,
	"dot-outline": DotOutline,
	"first-aid-kit": FirstAidKit,
	"x-circle": Circle,
	baby: Baby,
	barcode: Barcode,
	building: BuildingOffice,
	calendar: Calendar,
	dot: Dot,
	hourglass: HourglassMedium,
	refresh: ArrowsClockwise,
	package: Package,
	tag: Tag,
	user: User,
	warning: WarningCircle,
};

interface IconProps extends PhosphorIconProps {
	name: keyof typeof Icons;
}

function Icon({ name, className, ...props }: IconProps) {
	const Comp = Icons[name];
	return <Comp className={cn("shrink-0", className)} {...props} />;
}

export { Icon, type IconProps };
