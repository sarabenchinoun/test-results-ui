import { Card } from "@/components/card";
import { Header, HeaderTitle } from "@/components/header";
import { Icon } from "@/components/icon";
import { Layout, LayoutContent } from "@/components/layout";
import Link from "next/link";

export default function NotFound() {
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
				<HeaderTitle className="mt-1">Screen Not Found</HeaderTitle>
			</Header>
			<LayoutContent>
				<Card className="p-6">
					<p>
						The screen you are looking for does not exist. Please check the URL
						and try again.
					</p>
					<Link
						href="/screens"
						className="mt-2 inline-flex cursor-pointer items-center gap-x-2 rounded-md bg-info-solid-bg px-2.5 py-1.5 font-semibold text-info-solid-text text-sm shadow-sm hover:bg-info-solid-bg/90 focus-visible:outline focus-visible:outline-danbg-info-solid-bg focus-visible:outline-offset-2"
					>
						<Icon name="caret-left" className="size-4" aria-hidden="true" />
						Back to Screens
					</Link>
				</Card>
			</LayoutContent>
		</Layout>
	);
}
