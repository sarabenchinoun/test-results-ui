import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";
import { ScreensListFallback } from "./screens-list";

export default function Loading() {
	return (
		<Layout>
			<Header>
				<HeaderTitle>Loading Screens...</HeaderTitle>
			</Header>
			<LayoutContent>
				<ScreensListFallback />
			</LayoutContent>
		</Layout>
	);
}
