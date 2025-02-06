import type { SampleType, ScreenServiceResult } from "@/backend/contract";
import { Badge } from "@/components/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/card";
import { Icon } from "@/components/icon";
import { Skeleton } from "@/components/skeleton";
import { cn } from "@/utils/cn";
import {
	formatDate,
	getServiceLevelIcon,
	getServiceLevelTheme,
} from "@/utils/helpers";

function ServiceRequestCard({
	result,
}: { result: ScreenServiceResult & { sampleType: SampleType } }) {
	const cardTheme = getServiceLevelTheme(result.level);
	return (
		<Card
			className={cn("border-t-4", {
				"border-t-gray-solid-bg": cardTheme === "gray",
				"border-t-danger-solid-bg": cardTheme === "danger",
				"border-t-warning-solid-bg": cardTheme === "warning",
				"border-t-success-solid-bg": cardTheme === "success",
				"border-t-info-solid-bg": cardTheme === "info",
			})}
		>
			<CardHeader className="px-4 py-3 sm:flex-row sm:justify-between">
				<div>
					<CardTitle>{result.status} RESULT</CardTitle>
					<CardDescription className="mt-1 ">
						Sample: {result.sampleType}
					</CardDescription>
				</div>
				<div className="flex items-center gap-2">
					<Badge variant="ghost" theme={cardTheme}>
						{result.level}
					</Badge>
					<Badge variant="solid" theme={cardTheme}>
						<Icon name={getServiceLevelIcon(result.level)} />
						{result.caseCode}
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<div className="gap-x-8 sm:flex">
					<CardDescription>
						Observation:{" "}
						{result.observationDate
							? formatDate(result.observationDate)
							: "Unknown"}
					</CardDescription>
					<CardDescription>
						Verification:{" "}
						{result.verificationDate
							? formatDate(result.verificationDate)
							: "Unknown"}
					</CardDescription>
				</div>
				{result.description ? (
					<CardDescription className="mt-6 whitespace-pre-line">
						{result.description}
					</CardDescription>
				) : null}
			</CardContent>
		</Card>
	);
}

function ServiceRequestCardSkeleton() {
	return (
		<Card>
			<CardHeader className="flex-row justify-between px-4 py-3">
				<div>
					<Skeleton className="mb-2 h-6 w-32" />
					<Skeleton className="h-4 w-24" />
				</div>
				<div className="flex items-center gap-2">
					<Skeleton className="h-6 w-16" />
					<Skeleton className="h-6 w-24" />
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<Skeleton className="mb-2 h-4 w-48" />
				<Skeleton className="mb-4 h-4 w-48" />
				<Skeleton className="h-16 w-full" />
			</CardContent>
		</Card>
	);
}
export { ServiceRequestCard, ServiceRequestCardSkeleton };
