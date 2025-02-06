import Link from "next/link";

import type { ScreenListResponse } from "@/backend/contract";
import { Icon } from "@/components/icon";
import { Skeleton } from "@/components/skeleton";
import { StatusIndicator } from "@/components/status-indicator";
import { getScreenStatusTheme } from "@/utils/helpers";

function ScreensListFallback() {
	return (
		<ul className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
			{Array.from({ length: 5 }).map((_, idx) => (
				<li
					// biome-ignore lint/suspicious/noArrayIndexKey: This is just a placeholder
					key={idx}
					className="relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
				>
					<div className="flex min-w-0 flex-col gap-x-4">
						<Skeleton className="h-5 w-34" />
						<div className="mt-2 flex items-center gap-2">
							<Skeleton className="h-4 w-56" />
							<Skeleton className="h-4 w-45" />
						</div>
					</div>
					<div className="flex shrink-0 flex-col items-end gap-x-4">
						<Skeleton className="h-5 w-56" />
						<Skeleton className="mt-2 h-4 w-45" />
					</div>
				</li>
			))}
		</ul>
	);
}

function ScreensList({ screens }: { screens: ScreenListResponse[] }) {
	return (
		<ul className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
			{screens.map((screen) => (
				<li
					key={screen.screenReference}
					className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
				>
					<div className="flex min-w-0 gap-x-4">
						<div className="min-w-0 flex-auto">
							<p className="font-semibold text-gray-900 text-sm/6">
								<Link href={`/screens/${screen.screenReference}`}>
									<span className="-top-px absolute inset-x-0 bottom-0" />
									{screen.screenReference}
								</Link>
							</p>
							<div className="mt-1 flex items-center gap-2">
								<p className="flex items-center gap-1 text-gray-500 text-sm/5">
									<Icon name="package" />
									{screen.serviceProviderName}
								</p>
								<span className="size-0.5 rounded-full bg-gray-500" />
								<p className="flex items-center gap-1 text-gray-500 text-sm/5">
									<Icon name="barcode" />
									{screen.kitBarcode}
								</p>
							</div>
						</div>
					</div>
					<div className="flex shrink-0 items-center gap-x-4">
						<div className="hidden sm:flex sm:flex-col sm:items-end">
							<p className="text-gray-900 text-sm/6">
								Updated {screen.updatedOn}
							</p>

							<div className="mt-1 flex items-center gap-x-1.5">
								<StatusIndicator theme={getScreenStatusTheme(screen.status)} />
								<p className="text-gray-500 text-sm/5">{screen.status}</p>
							</div>
						</div>
						<Icon
							name="caret-right"
							aria-hidden="true"
							className="size-5 flex-none text-gray-400"
						/>
					</div>
				</li>
			))}
		</ul>
	);
}

export { ScreensList, ScreensListFallback };
