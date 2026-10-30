/** @format */

import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks } from "../../data/site";
import { cn } from "../../utils/utils";
import { track, EVENTS } from "../../lib/track";

const desktopLink = ({ isActive }) =>
	cn(
		"relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-fast",
		isActive ? "text-ink" : "text-ink-muted hover:text-ink",
	);

export default function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { pathname } = useLocation();
	const panelId = useId();
	const toggleRef = useRef(null);
	const panelRef = useRef(null);

	// Close the menu on navigation.
	useEffect(() => setOpen(false), [pathname]);

	// Border and shadow once the page has scrolled, via a sentinel at the top.
	useEffect(() => {
		const sentinel = document.getElementById("top-sentinel");
		if (!sentinel || !("IntersectionObserver" in window)) return;
		const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
		io.observe(sentinel);
		return () => io.disconnect();
	}, []);

	// Escape closes the menu and returns focus; focus moves into the panel on open.
	useEffect(() => {
		if (!open) return;
		panelRef.current?.querySelector("a")?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") {
				setOpen(false);
				toggleRef.current?.focus();
			}
		};
		const onResize = () => window.innerWidth >= 1024 && setOpen(false);
		document.addEventListener("keydown", onKey);
		window.addEventListener("resize", onResize);
		return () => {
			document.removeEventListener("keydown", onKey);
			window.removeEventListener("resize", onResize);
		};
	}, [open]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-base supports-[backdrop-filter]:bg-white/80",
				scrolled || open ? "border-line shadow-[0_1px_12px_rgba(16,24,40,0.06)]" : "border-transparent",
			)}>
			<div className="container-page flex h-16 items-center justify-between gap-4">
				<Logo />

				<nav aria-label="Main" className="hidden lg:block">
					<ul className="flex items-center gap-1">
						{navLinks.map((link) => (
							<li key={link.to}>
								<NavLink to={link.to} end={link.to === "/"} className={desktopLink}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex items-center gap-2">
					<Button
						to="/contact?engagement=virtual-developer"
						size="sm"
						className="hidden sm:inline-flex"
						onClick={() => track(EVENTS.virtualDeveloperCta, { location: "header" })}>
						Hire Me
						<ArrowRight className="h-4 w-4" aria-hidden="true" />
					</Button>
					<button
						ref={toggleRef}
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink ring-1 ring-inset ring-line hover:bg-sand-50 lg:hidden"
						aria-expanded={open}
						aria-controls={panelId}
						onClick={() => setOpen((v) => !v)}>
						<span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
						{open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
					</button>
				</div>
			</div>

			<div
				id={panelId}
				ref={panelRef}
				hidden={!open}
				className="border-t border-line bg-white lg:hidden">
				<nav aria-label="Mobile" className="container-page py-4">
					<ul className="grid gap-1">
						{navLinks.map((link) => (
							<li key={link.to}>
								<NavLink
									to={link.to}
									end={link.to === "/"}
									className={({ isActive }) =>
										cn(
											"flex min-h-12 items-center rounded-xl px-3 text-base font-medium",
											isActive ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-sand-50",
										)
									}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="mt-4 grid gap-2 sm:grid-cols-2">
						<Button
							to="/contact?engagement=virtual-developer"
							onClick={() => track(EVENTS.virtualDeveloperCta, { location: "mobile-menu" })}>
							Hire Me as a Virtual Developer
						</Button>
						<Button
							to="/contact?engagement=project"
							variant="secondary"
							onClick={() => track(EVENTS.projectInquiryCta, { location: "mobile-menu" })}>
							Discuss Your Project
						</Button>
					</div>
				</nav>
			</div>
		</header>
	);
}
