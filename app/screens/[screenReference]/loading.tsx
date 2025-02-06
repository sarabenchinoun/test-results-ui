import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/card";
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from "@/components/description-list";
import { Header, HeaderTitle } from "@/components/header";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Layout, LayoutContent } from "@/components/layout";
import { Skeleton } from "@/components/skeleton";
import Link from "next/link";
import { Grid } from "./grid";
import { ServiceRequestCardSkeleton } from "./service-request-card";

export default function Loading() {
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
				<HeaderTitle className="mt-1">Loading Screen...</HeaderTitle>
			</Header>
			<LayoutContent>
				<Grid
					leftColumn={
						<section aria-labelledby="section-1-title" className="space-y-2">
							<Heading id="section-1-title" level={2}>
								Loading Record Summary...
							</Heading>
							<Card>
								<CardContent className="p-6">
									<DescriptionList>
										{Array.from({ length: 10 }).map((_, idx) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: This is just a placeholder
											<React.Fragment key={idx}>
												<DescriptionTerm>
													<Skeleton className="size-5" />
													<Skeleton className="h-5 w-20" />
												</DescriptionTerm>
												<DescriptionDetails>
													<Skeleton className="h-5 w-34" />
												</DescriptionDetails>
											</React.Fragment>
										))}
									</DescriptionList>
								</CardContent>
							</Card>
						</section>
					}
					rightColumn={
						<section aria-labelledby="section-2-title" className="space-y-2">
							<Heading level={2} id="section-2-title">
								Loading Test Bookings...
							</Heading>
							<Card>
								<CardHeader className="flex-row items-center justify-between border-gray-200 border-b px-4 py-3">
									<Skeleton className="h-6 w-32" />
									<Skeleton className="h-4 w-24" />
								</CardHeader>
								<CardContent className="space-y-4 p-6">
									{Array.from({ length: 3 }).map((_, idx) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: This is just a placeholder
										<ServiceRequestCardSkeleton key={idx} />
									))}
								</CardContent>
							</Card>
						</section>
					}
				/>
			</LayoutContent>
		</Layout>
	);
}
