"use client";

import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";
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
				<HeaderTitle>Screens</HeaderTitle>
			</Header>
			<LayoutContent>
				<div className="grid place-items-center overflow-hidden bg-white py-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
					<div className="text-center">
						<p>Ooops...Something went wrong</p>

						<p>Please try again</p>
						<button type="button" onClick={reload}>
							Try again
						</button>
					</div>
				</div>
			</LayoutContent>
		</Layout>
	);
}
