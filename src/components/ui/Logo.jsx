/** @format */

import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
	return (
		<Link
			to="/"
			onClick={onClick}
			className="group inline-flex items-center gap-2.5 rounded-lg"
			aria-label="Faisal Nadaf, home">
			<span
				aria-hidden="true"
				className="grid h-9 w-9 place-items-center rounded-[0.65rem] bg-gradient-to-br from-brand-500 to-brand-700 text-[0.8125rem] font-bold tracking-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
				FN
			</span>
			<span className="flex flex-col leading-none">
				<span className="text-[0.9875rem] font-semibold tracking-tight text-ink">Faisal Nadaf</span>
				<span className="mt-1 hidden text-[0.6875rem] font-medium text-ink-muted sm:block">
					Virtual &amp; freelance developer
				</span>
			</span>
		</Link>
	);
}
