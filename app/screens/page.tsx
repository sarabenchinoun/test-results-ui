import { get } from "@/backend/api";
import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";
import { ScreensList } from "./screens-list";

export default async function Screens() {
	const screens = await get();
	return (
		<Layout>
			<Header>
				<HeaderTitle>Screens</HeaderTitle>
			</Header>
			<LayoutContent>
				<ScreensList screens={screens} />
			</LayoutContent>
		</Layout>
	);
}
