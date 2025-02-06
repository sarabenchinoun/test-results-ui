import * as React from "react";

import { Card } from "@/components/card";
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from "@/components/description-list";
import { Header, HeaderTitle } from "@/components/header";
import { Heading } from "@/components/heading";
import { Layout, LayoutContent } from "@/components/layout";
import { Skeleton } from "@/components/skeleton";
import { Grid } from "./grid";

export default function Loading() {
	return (
		<Layout>
			<Header>
				<HeaderTitle>Loading Screen...</HeaderTitle>
			</Header>
			<LayoutContent>
				<Grid
					leftColumn={
						<section aria-labelledby="section-1-title" className="space-y-2">
							<Heading id="section-1-title" level={2}>
								Loading Record Summary...
							</Heading>
							<Card className="mt-2 px-4 py-2">
								<DescriptionList>
									{Array.from({ length: 10 }).map((_, idx) => (
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
							</Card>
						</section>
					}
					rightColumn={
						<section aria-labelledby="section-2-title" className="space-y-2">
							<Heading level={2} id="section-2-title">
								Loading Test Bookings...
							</Heading>
							<Skeleton className="mt-2 h-50 w-full" />
						</section>
					}
				/>
			</LayoutContent>
		</Layout>
	);
}
