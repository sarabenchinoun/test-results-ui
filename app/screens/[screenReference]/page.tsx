import { getById } from "@/backend/api";
import { notFound } from "next/navigation";

import { Card, CardHeader } from "@/components/card";
import { Container } from "@/components/container";
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from "@/components/description-list";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { StatusBadge } from "@/components/status-badge";

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
									Section title
								</Heading>
								<Card className="mt-2 px-4 py-2">
									<DescriptionList>
										<DescriptionTerm icon={<Icon name="first-aid-kit" />}>
											Customer
										</DescriptionTerm>
										<DescriptionDetails>Michael Foster</DescriptionDetails>
										<DescriptionTerm icon={<Icon name="first-aid-kit" />}>
											Customer
										</DescriptionTerm>
										<DescriptionDetails>Michael Foster</DescriptionDetails>
									</DescriptionList>
								</Card>
							</section>
						</div>

						{/* Right column */}
						<div className="grid grid-cols-1 gap-4 lg:col-span-2">
							<section aria-labelledby="section-2-title">
								<Heading level={2} id="section-2-title">
									Section title
								</Heading>
								<Card className="mt-2">
									<CardHeader>
										<Heading level={3}>Result title</Heading>
									</CardHeader>

									{/* content */}
								</Card>
							</section>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

async function UserResults({ screenReference }: { screenReference: string }) {
	const screens = await getById(screenReference);

	if (screens.status === 404) {
		notFound();
	}

	if (screens.status === 500) {
		throw new Error(screens.message);
	}

	return <pre>{JSON.stringify(screens, undefined, 2)}</pre>;
}
