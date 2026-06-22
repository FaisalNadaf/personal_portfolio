/** @format */

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { LinkedIn, GitHub, Twitter, Email, Phone } from "@mui/icons-material";
import SectionHeader from "../ui/SectionHeader";
import MagnetoButton from "../MagnetoButton";
import { Bio } from "../../data/constants";

const SMOOTH = [0.22, 0.61, 0.36, 1];

const containerVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08, delayChildren: 0.15 },
	},
};

const fieldVariants = {
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: SMOOTH },
	},
};

const sideVariants = {
	hidden: { opacity: 0, x: -20 },
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: SMOOTH },
	},
};

const inputClass =
	"w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-ink-primary placeholder-ink-muted outline-none transition-all duration-200 hover:border-zinc-700 focus:border-accent focus:bg-zinc-900/70 focus:ring-2 focus:ring-accent/30";

const labelClass =
	"mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted";

const CONTACT_LINKS = [
	{
		href: `tel:${Bio.phone.replace(/\s+/g, "")}`,
		label: "Phone",
		handle: Bio.phone,
		Icon: Phone,
	},
	{
		href: Bio.linkedin,
		label: "LinkedIn",
		handle: "Connect with me",
		Icon: LinkedIn,
	},
	{
		href: Bio.github,
		label: "GitHub",
		handle: "@FaisalNadaf",
		Icon: GitHub,
	},
	{
		href: Bio.twitter,
		label: "Twitter / X",
		handle: "@faisal_nadaf",
		Icon: Twitter,
	},
];

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(form.current);
		const fields = ["from_email", "from_name", "subject", "message"];
		for (let field of fields) {
			if (!formData.get(field)) {
				toast("Please fill in all fields.");
				return;
			}
		}

		setLoading(true);
		emailjs
			.sendForm(
				"service_br00yk5",
				"template_igrpbae",
				form.current,
				"w95W4XH0su1-P8i_q",
			)
			.then(
				() => {
					toast("Message Sent! I Will Reach You Soon");
					form.current.reset();
					setLoading(false);
				},
				(error) => {
					toast("An error occurred: " + error.text);
					setLoading(false);
				},
			);
	};

	return (
		<section
			id="Contact"
			className="section-container relative py-16 md:py-24">
			{/* Decorative ambient orbs */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-20 top-32 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-20 bottom-32 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
			/>

			<SectionHeader
				eyebrow="Contact"
				title="Let's build something"
				description="Have a project in mind, or just want to say hi? Drop me a message — I'll get back to you soon."
			/>

			<div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-5">
				{/* Left: contact info */}
				<motion.aside
					variants={sideVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-60px" }}
					className="flex flex-col gap-5 lg:col-span-2">
					<div>
						<h3 className="text-xl font-semibold text-ink-primary">
							Get in touch
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-ink-secondary">
							Open to freelance work, collaborations, and roles where I can
							build meaningful products.
						</p>
					</div>

					{/* Status pill */}
					<span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
						</span>
						Available for work
					</span>

					{/* Social cards */}
					<div className="flex flex-col gap-3">
						{CONTACT_LINKS.map(({ href, label, handle, Icon }, i) => (
							<motion.a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								whileHover={{ x: 4 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 22,
								}}
								initial={{ opacity: 0, x: -12 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								custom={i}
								className="group/card flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-zinc-900/80 hover:shadow-glow-sm"
								style={{ transitionDelay: `${i * 60}ms` }}>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover/card:bg-accent group-hover/card:text-white group-hover/card:ring-accent">
									<Icon sx={{ fontSize: 20 }} />
								</div>
								<div className="min-w-0 flex-1">
									<p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
										{label}
									</p>
									<p className="truncate text-sm font-medium text-ink-primary">
										{handle}
									</p>
								</div>
								<span
									aria-hidden
									className="text-ink-muted transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:text-accent">
									→
								</span>
							</motion.a>
						))}
					</div>
				</motion.aside>

				{/* Right: form */}
				<motion.form
					ref={form}
					onSubmit={handleSubmit}
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-60px" }}
					className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl shadow-black/30 backdrop-blur-md md:p-8 lg:col-span-3">
					{/* Top accent strip */}
					<motion.div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 h-px"
						style={{
							background:
								"linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.7) 50%, transparent 100%)",
							backgroundSize: "200% 100%",
						}}
						animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "linear",
						}}
					/>

					{/* Form header */}
					<motion.div
						variants={fieldVariants}
						className="mb-1 flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
							<Email sx={{ fontSize: 18 }} />
						</div>
						<div>
							<h3 className="text-base font-semibold text-ink-primary">
								Send me a message
							</h3>
							<p className="text-xs text-ink-muted">
								I usually respond within 24 hours
							</p>
						</div>
					</motion.div>

					<motion.div
						variants={fieldVariants}
						className="grid gap-4 md:grid-cols-2">
						<div>
							<label
								htmlFor="contact-email"
								className={labelClass}>
								Your email
							</label>
							<input
								id="contact-email"
								type="email"
								name="from_email"
								placeholder="you@example.com"
								className={inputClass}
							/>
						</div>
						<div>
							<label
								htmlFor="contact-name"
								className={labelClass}>
								Your name
							</label>
							<input
								id="contact-name"
								name="from_name"
								placeholder="Jane Doe"
								className={inputClass}
							/>
						</div>
					</motion.div>

					<motion.div variants={fieldVariants}>
						<label
							htmlFor="contact-subject"
							className={labelClass}>
							Subject
						</label>
						<input
							id="contact-subject"
							name="subject"
							placeholder="What's this about?"
							className={inputClass}
						/>
					</motion.div>

					<motion.div variants={fieldVariants}>
						<label
							htmlFor="contact-message"
							className={labelClass}>
							Message
						</label>
						<textarea
							id="contact-message"
							name="message"
							rows={5}
							placeholder="Tell me about your project, idea, or just say hi..."
							className={`${inputClass} resize-none`}
						/>
					</motion.div>

					{/* Magneto submit */}
					<motion.div
						variants={fieldVariants}
						className="mt-4 flex justify-center">
						<MagnetoButton
							type="submit"
							disabled={loading}
							text={loading ? "Sending..." : "Send"}
						/>
					</motion.div>
				</motion.form>
			</div>
		</section>
	);
};

export default Contact;
