"use client";

import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";

export default function ErrorPage({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<Layout>
			<Header>
				<HeaderTitle>Error</HeaderTitle>
			</Header>
			<LayoutContent>
				<div className="grid place-items-center overflow-hidden bg-white py-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
					<div className="text-center">
						<p>Ooops...Something went wrong</p>

						<p>Please try again</p>
						<button type="button" onClick={() => reset()}>
							Try again
						</button>
					</div>
				</div>
			</LayoutContent>
		</Layout>
	);
}
