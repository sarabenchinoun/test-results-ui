import { getById } from "@/backend/api";
import { notFound } from "next/navigation";

import type { ScreenDetailsResponse } from "@/backend/contract";
import { Badge } from "@/components/badge";
import { Card, CardHeader } from "@/components/card";
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
import { Text } from "@/components/text";
import { cn } from "@/utils/cn";
import {
	formatDate,
	getScreenStatusTheme,
	getServiceLevelIcon,
	getServiceLevelTheme,
} from "@/utils/helpers";
import { Grid } from "./grid";

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
				<div className="flex items-center gap-2">
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
		<div className="mt-1 flex items-center gap-x-1.5">
			<StatusIndicator theme={getScreenStatusTheme(status)} />
			<p className="text-gray-500 text-sm/5">{status}</p>
		</div>
	);
}

async function RecordSummary({ data }: { data: ScreenDetailsResponse }) {
	function getMetaDataValue(key: string) {
		return (
			data?.screenMetaData?.find((meta) => meta.key === key)?.value ??
			"Not provided"
		);
	}

	return (
		<Card className="mt-2 px-4 py-2">
			<DescriptionList>
				<DescriptionTerm icon={<Icon name="first-aid-kit" />}>
					Kit code
				</DescriptionTerm>
				<DescriptionDetails>{data?.kitBarcode}</DescriptionDetails>

				<DescriptionTerm icon={<Icon name="tag" />}>Order ref</DescriptionTerm>
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
				<DescriptionDetails>
					{data?.createdOn
						? formatDate({ date: data.createdOn })
						: "Not completed"}
				</DescriptionDetails>
				<DescriptionTerm icon={<Icon name="calendar" />}>
					Received
				</DescriptionTerm>
				<DescriptionDetails>
					{data?.updatedOn
						? formatDate({ date: data.updatedOn })
						: "Not completed"}
				</DescriptionDetails>

				<DescriptionTerm icon={<Icon name="calendar-check" />}>
					Completed
				</DescriptionTerm>
				<DescriptionDetails>
					{data?.completedDate
						? formatDate({ date: data.completedDate })
						: "Not completed"}
				</DescriptionDetails>
				<Subheading level={4} className="my-2">
					Patient Details
				</Subheading>
				<DescriptionTerm icon={<Icon name="user" />}>Name</DescriptionTerm>
				<DescriptionDetails>{getMetaDataValue("FirstName")}</DescriptionDetails>

				<DescriptionTerm icon={<Icon name="calendar" />}>
					Date of birth
				</DescriptionTerm>
				<DescriptionDetails>
					{formatDate({ date: getMetaDataValue("DateOfBirth") })}
				</DescriptionDetails>

				<DescriptionTerm icon={<Icon name="hourglass" />}>Age</DescriptionTerm>
				<DescriptionDetails>{getMetaDataValue("Age")}</DescriptionDetails>

				<DescriptionTerm icon={<Icon name="baby" />}>
					Sex at birth
				</DescriptionTerm>
				<DescriptionDetails>
					{getMetaDataValue("AssignedSex")}
				</DescriptionDetails>
			</DescriptionList>
		</Card>
	);
}

function ServiceRequests({ data }: { data: ScreenDetailsResponse }) {
	const { serviceRequests } = data;
	if (!serviceRequests.length) {
		return <Text>No test bookings found</Text>;
	}

	return serviceRequests.map((request) => (
		<Card key={request.serviceRequestId} className="mt-2">
			<CardHeader>
				<Subheading>{request.title}</Subheading>
				<Text>Sample ID: #{request.sampleId}</Text>
			</CardHeader>
			<Text className="px-4 py-3">{request.description}</Text>
			{request.results?.length > 0 &&
				request.results.map((result) => {
					const cardTheme = getServiceLevelTheme(result.level);
					return (
						<div
							key={result.resultId}
							className={cn(
								"m-3 rounded-md border border-gray-200 border-t-4 p-4",
								{
									"border-t-gray-solid-bg": cardTheme === "gray",
									"border-t-danger-solid-bg": cardTheme === "danger",
									"border-t-warning-solid-bg": cardTheme === "warning",
									"border-t-success-solid-bg": cardTheme === "success",
									"border-t-info-solid-bg": cardTheme === "info",
								},
							)}
						>
							<div className="flex items-center justify-between text-gray-500 text-sm">
								<div>
									<Subheading level={3}>{result.status} RESULT</Subheading>
									<Text>Sample: {request.sampleType}</Text>
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
							</div>
							<div className="mt-4 flex gap-x-4 text-gray-500 text-sm">
								<div>
									Observation:{" "}
									{result.observationDate &&
										formatDate({ date: result.observationDate })}
								</div>
								<div>
									Verification:{" "}
									{result.verificationDate &&
										formatDate({ date: result.verificationDate })}
								</div>
							</div>
							<div className="mt-4 whitespace-pre-line">
								{result.description && <Text>{result.description}</Text>}
							</div>
						</div>
					);
				})}
		</Card>
	));
}
