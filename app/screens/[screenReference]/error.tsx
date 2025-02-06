"use client";

import { Card } from "@/components/card";
import { Header, HeaderTitle } from "@/components/header";
import { Icon } from "@/components/icon";
import { Layout, LayoutContent } from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();
	const reload = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};
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
						onClick={reload}
						className="mt-2 inline-flex cursor-pointer items-center gap-x-2 rounded-md bg-info-solid-bg px-2.5 py-1.5 font-semibold text-info-solid-text text-sm shadow-sm hover:bg-info-solid-bg/90 focus-visible:outline focus-visible:outline-danbg-info-solid-bg focus-visible:outline-offset-2"
					>
						<Icon name="refresh" className="size-4" aria-hidden="true" />
						Try again
					</button>
				</Card>
			</LayoutContent>
		</Layout>
	);
}
