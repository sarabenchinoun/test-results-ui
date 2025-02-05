import { getById } from "@/backend/api";
import { notFound } from "next/navigation";
import * as React from "react";

import { Card, CardHeader } from "@/components/card";
import { Container } from "@/components/container";
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from "@/components/description-list";
import { Heading, Subheading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { StatusBadge } from "@/components/status-badge";
import { Text } from "@/components/text";
import { formatDate } from "@/utils/helpers";

interface ScreenProps {
	params: { screenReference: string };
}

export default async function Screen({ params }: ScreenProps) {
	const { screenReference } = params;
	return (
		<>
			<div className="py-10">
				<Container as="header" className="flex gap-x-1.5">
					<Heading>{screenReference}</Heading>
					<StatusBadge status="completed" />
				</Container>

				<Container as="main" className="mt-6">
					<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-6">
						{/* Left column */}
						<div className="grid grid-cols-1 gap-4 lg:col-span-1">
							<section aria-labelledby="section-1-title">
								<Heading id="section-1-title" level={2}>
									Record Summary
								</Heading>
								<React.Suspense fallback={<p>Loading...</p>}>
									<RecordSummary screenReference={screenReference} />
								</React.Suspense>
							</section>
						</div>

						{/* Right column */}
						<div className="grid grid-cols-1 gap-4 lg:col-span-2">
							<section aria-labelledby="section-2-title">
								<Heading level={2} id="section-2-title">
									Test Bookings
								</Heading>
								<React.Suspense fallback={<p>Loading...</p>}>
									<UserResults screenReference={screenReference} />
								</React.Suspense>
							</section>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

async function UserResults({ screenReference }: { screenReference: string }) {
	const screen = await getById(screenReference);

	if (screen.status === 404) {
		notFound();
	}

	if (screen.status === 500) {
		throw new Error(screen.message);
	}
	const data = screen.data?.serviceRequests;

	return (
		<>
			{data?.map((request) => (
				<Card key={request.serviceRequestId} className="mt-2">
					<CardHeader>
						<Subheading>{request.title}</Subheading>
						<Text>Sample ID: #{request.sampleId}</Text>
					</CardHeader>
					<Text className="px-4 py-3">{request.description}</Text>
					{request.results?.length > 0 &&
						request.results.map((result) => (
							<div
								key={result.resultId}
								className="m-3 rounded-md border-x border-x-gray-200 border-t-4 border-t-danger-solid-bg border-b border-b-gray-200 p-4"
							>
								<div className="flex items-center justify-between text-gray-500 text-sm">
									<div>
										<Subheading level={3}>{result.status} RESULT</Subheading>
										<Text>Sample: {request.sampleType}</Text>
									</div>
									<div className="flex items-center gap-2">
										<span className="inline-flex items-center gap-x-1.5 rounded-md bg-danger-bg px-2 py-1 font-medium text-danger-text text-xs">
											{result.level}
										</span>
										<span className="inline-flex items-center gap-x-1.5 rounded-md bg-danger-solid-bg px-2 py-1 font-medium text-danger-solid-text text-xs">
											<Icon name="warning" />
											{result.caseCode}
										</span>
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
						))}
				</Card>
			))}
		</>
	);
}

interface RecordSummaryProps {
	screenReference: string;
}

async function RecordSummary({ screenReference }: RecordSummaryProps) {
	const screen = await getById(screenReference);
	if (screen.status === 404) {
		notFound();
	}

	if (screen.status === 500) {
		throw new Error(screen.message);
	}

	const data = screen.data;

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
