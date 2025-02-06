import { getById } from "@/backend/api";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { ScreenDetailsResponse } from "@/backend/contract";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/card";
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from "@/components/description-list";
import { Header, HeaderTitle } from "@/components/header";
import { Heading, Subheading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Layout, LayoutContent } from "@/components/layout";
import { StatusIndicator } from "@/components/status-indicator";
import { formatDate, getScreenStatusTheme } from "@/utils/helpers";
import { Grid } from "./grid";
import { ServiceRequestCard } from "./service-request-card";

interface ScreenProps {
	params: Promise<{ screenReference: string }>;
}

async function fetchScreenData(screenReference: string) {
	const screen = await getById(screenReference);

	if (screen.status === 404) notFound();
	if (screen.status === 500 || !screen.data) throw new Error(screen.message);

	return screen.data;
}

export default async function Screen({ params }: ScreenProps) {
	const { screenReference } = await params;

	const screenData = await fetchScreenData(screenReference);
	return (
		<Layout>
			<Header>
				<Link
					href="/screens"
					className="flex items-center gap-1 text-gray-600 text-sm hover:underline"
				>
					<Icon name="caret-left" className="size-3" />
					Back
				</Link>
				<div className="mt-1 flex items-center gap-2">
					<HeaderTitle>{screenReference}</HeaderTitle>
					<ScreenStatus status={screenData.status} />
				</div>
			</Header>

			<LayoutContent>
				<Grid
					leftColumn={
						<section aria-labelledby="section-1-title" className="space-y-2">
							<Heading id="section-1-title" level={2}>
								Record Summary
							</Heading>
							<RecordSummary data={screenData} />
						</section>
					}
					rightColumn={
						<section aria-labelledby="section-2-title" className="space-y-2">
							<Heading level={2} id="section-2-title">
								Test Bookings
							</Heading>
							<ServiceRequests data={screenData} />
						</section>
					}
				/>
			</LayoutContent>
		</Layout>
	);
}

async function ScreenStatus({
	status,
}: { status: ScreenDetailsResponse["status"] }) {
	if (!status) return null;
	return (
		<div className="flex items-center gap-x-1.5">
			<StatusIndicator theme={getScreenStatusTheme(status)} />
			<p className="text-gray-500 text-sm/5">{status}</p>
		</div>
	);
}

function RecordSummary({ data }: { data: ScreenDetailsResponse }) {
	function getMetaDataValue(key: string) {
		return (
			data?.screenMetaData?.find((meta) => meta.key === key)?.value ??
			"Not provided"
		);
	}

	return (
		<Card>
			<CardContent className="px-6 py-2">
				<DescriptionList>
					<DescriptionTerm icon={<Icon name="first-aid-kit" />}>
						Kit code
					</DescriptionTerm>
					<DescriptionDetails>{data?.kitBarcode}</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="tag" />}>
						Order ref
					</DescriptionTerm>
					<DescriptionDetails>
						{getMetaDataValue("OrderReference")}
					</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="barcode" />}>SKU</DescriptionTerm>
					<DescriptionDetails>{getMetaDataValue("SkuCode")}</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="building" />}>
						Service provider
					</DescriptionTerm>
					<DescriptionDetails>{data?.serviceProviderName}</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="calendar" />}>
						Created
					</DescriptionTerm>
					<DescriptionDetails>{formatDate(data.createdOn)}</DescriptionDetails>
					<DescriptionTerm icon={<Icon name="calendar" />}>
						Received
					</DescriptionTerm>
					<DescriptionDetails>{formatDate(data.updatedOn)}</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="calendar-check" />}>
						Completed
					</DescriptionTerm>
					<DescriptionDetails>
						{data.completedDate
							? formatDate(data.completedDate)
							: "Not completed"}
					</DescriptionDetails>

					<Subheading level={4} className="my-2">
						Patient Details
					</Subheading>
					<DescriptionTerm icon={<Icon name="user" />}>Name</DescriptionTerm>
					<DescriptionDetails>
						{getMetaDataValue("FirstName")}
					</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="calendar" />}>
						Date of birth
					</DescriptionTerm>
					<DescriptionDetails>
						{formatDate(getMetaDataValue("DateOfBirth"))}
					</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="hourglass" />}>
						Age
					</DescriptionTerm>
					<DescriptionDetails>{getMetaDataValue("Age")}</DescriptionDetails>

					<DescriptionTerm icon={<Icon name="baby" />}>
						Sex at birth
					</DescriptionTerm>
					<DescriptionDetails>
						{getMetaDataValue("AssignedSex")}
					</DescriptionDetails>
				</DescriptionList>
			</CardContent>
		</Card>
	);
}

function ServiceRequests({ data }: { data: ScreenDetailsResponse }) {
	const serviceRequests = data.serviceRequests ?? [];

	if (!serviceRequests.length) {
		return (
			<Card>
				<CardContent className="p-4">
					<p>No test bookings found</p>
				</CardContent>
			</Card>
		);
	}

	return serviceRequests.map((request) => {
		const results = request.results ?? [];

		return (
			<Card key={request.serviceRequestId}>
				<CardHeader className="flex flex-row items-center justify-between gap-2 border-gray-200 border-b bg-gray-100 px-4 py-3">
					<CardTitle>{request.title}</CardTitle>
					<CardDescription>Sample ID: #{request.sampleId}</CardDescription>
				</CardHeader>
				<CardContent className="px-4 py-4">
					<CardDescription>{request.description}</CardDescription>
					{results.length ? (
						<ul className="mt-4 space-y-4">
							{results.map((result) => {
								return (
									<ServiceRequestCard
										key={result.resultId}
										result={{ ...result, sampleType: request.sampleType }}
									/>
								);
							})}
						</ul>
					) : (
						<CardDescription>No results found</CardDescription>
					)}
				</CardContent>
			</Card>
		);
	});
}
