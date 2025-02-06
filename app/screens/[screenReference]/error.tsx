"use client";

import { Card } from "@/components/card";
import { Header, HeaderTitle } from "@/components/header";
import { Icon } from "@/components/icon";
import { Layout, LayoutContent } from "@/components/layout";
import Link from "next/link";

export default function ErrorPage({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
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
				<HeaderTitle className="mt-1">Error</HeaderTitle>
			</Header>
			<LayoutContent>
				<Card className="p-6">
					<p>
						Opps... Something went wrong. We are unable to process your request
						at the moment.
					</p>

					<p>Please try again</p>
					<button
						type="button"
						onClick={() => reset()}
						className="mt-2 cursor-pointer text-info-text hover:underline"
					>
						Try again
					</button>
				</Card>
			</LayoutContent>
		</Layout>
	);
}
