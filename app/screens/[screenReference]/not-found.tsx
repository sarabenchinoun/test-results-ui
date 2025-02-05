import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>404 - Page Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/screens">Go back to screens</Link>
		</div>
	);
}
