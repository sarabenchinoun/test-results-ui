"use client"; // Error boundaries must be Client Components

export default function ErrorPage({
	error,
	reset,
}: { error: Error; reset: () => void }) {
	return (
		<div>
			<h2>Something went wrong!</h2>
			<p className="mt-2 mt-2 text-gra">{error.message}</p>
			<button type="button" onClick={reset}>
				Try again
			</button>
		</div>
	);
}
