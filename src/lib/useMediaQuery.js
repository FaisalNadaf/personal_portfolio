import { useSyncExternalStore } from "react";

/**
 * Server-safe media query hook. Returns `serverValue` during prerendering and
 * hydration, then follows the live media query.
 */
export function useMediaQuery(query, serverValue = false) {
	return useSyncExternalStore(
		(onChange) => {
			const mql = window.matchMedia(query);
			mql.addEventListener("change", onChange);
			return () => mql.removeEventListener("change", onChange);
		},
		() => window.matchMedia(query).matches,
		() => serverValue,
	);
}

export const usePrefersReducedMotion = () =>
	useMediaQuery("(prefers-reduced-motion: reduce)", false);

export const useFinePointer = () =>
	useMediaQuery("(hover: hover) and (pointer: fine)", false);
