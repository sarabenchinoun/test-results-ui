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
					<Link href="/screens" className="mt-2 text-info-text hover:underline">
						Back to Screens
					</Link>
				</Card>
			</LayoutContent>
		</Layout>
	);
}
