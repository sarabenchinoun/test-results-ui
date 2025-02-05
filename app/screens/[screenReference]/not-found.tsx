import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";
import Link from "next/link";

export default function NotFound() {
	return (
		<Layout>
			<Header>
				<HeaderTitle>Screen Not Found</HeaderTitle>
			</Header>
			<LayoutContent>
				<div className="grid place-items-center overflow-hidden bg-white py-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
					<div className="text-center">
						<p>Ooops...The screen you are looking for does not exist</p>
						<Link href="/screens" className="text-info-text underline">
							Go back to screens
						</Link>
					</div>
				</div>
			</LayoutContent>
		</Layout>
	);
}
