import { Header, HeaderTitle } from "@/components/header";
import { Layout, LayoutContent } from "@/components/layout";
import { Skeleton } from "@/components/skeleton";

export default function Loading() {
	return (
		<Layout>
			<Header>
				<HeaderTitle>Loading Screen...</HeaderTitle>
			</Header>
			<LayoutContent>
				<Skeleton className="h-96" />
			</LayoutContent>
		</Layout>
	);
}
