export function Grid({
	leftColumn,
	rightColumn,
}: { leftColumn: React.ReactNode; rightColumn: React.ReactNode }) {
	return (
		<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-6">
			<div className="grid grid-cols-1 gap-4 lg:col-span-1">{leftColumn}</div>
			<div className="grid grid-cols-1 gap-4 lg:col-span-2">{rightColumn}</div>
		</div>
	);
}
