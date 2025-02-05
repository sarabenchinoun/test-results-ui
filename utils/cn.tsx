import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This is a simple utility function to combine Tailwind CSS classes
// and ensure class overrides happen correctly
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
