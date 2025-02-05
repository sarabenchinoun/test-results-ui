import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";

export default function Screens() {
	return (
		<Layout>
			<Header>
				<HeaderTitle>Screens</HeaderTitle>
			</Header>
			<LayoutContent>
				<ul>
					<li>
						<a href="/screens/SR8704928">Screen 1</a>
					</li>
				</ul>
			</LayoutContent>
		</Layout>
	);
}
