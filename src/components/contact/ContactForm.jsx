/** @format */

import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, LoaderCircle, Send } from "lucide-react";
import Button from "../ui/Button";
import { site } from "../../data/site";
import { services } from "../../data/services";
import { track, EVENTS } from "../../lib/track";
import { cn } from "../../utils/utils";

const ENGAGEMENTS = [
	{ id: "virtual-developer", label: "Virtual developer", hint: "Ongoing development support" },
	{ id: "project", label: "Freelance project", hint: "A defined project with a clear outcome" },
	{ id: "not-sure", label: "Not sure yet", hint: "Help me choose" },
];

const BUDGETS = [
	"Prefer to discuss",
	"Under ₹50,000",
	"₹50,000 – ₹2,00,000",
	"₹2,00,000 – ₹5,00,000",
	"Above ₹5,00,000",
	"International budget (USD, AED or other)",
];

const CONTACT_METHODS = ["Email", "Phone or WhatsApp", "Video call"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initial = {
	name: "",
	email: "",
	company: "",
	engagement: "",
	services: [],
	budget: "",
	message: "",
	contactMethod: "Email",
	phone: "",
	website: "", // honeypot
};

function validate(v) {
	const e = {};
	if (v.name.trim().length < 2) e.name = "Please enter your name.";
	if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address, for example name@company.com.";
	if (!v.engagement) e.engagement = "Please choose how you would like to work together.";
	if (v.message.trim().length < 20)
		e.message = "Please describe what you need in a few sentences (at least 20 characters).";
	if (v.contactMethod === "Phone or WhatsApp" && v.phone.trim().replace(/[^\d]/g, "").length < 8)
		e.phone = "Please add a phone number so I can call or message you.";
	return e;
}

function composeMessage(v) {
	const engagement = ENGAGEMENTS.find((x) => x.id === v.engagement)?.label ?? v.engagement;
	const chosen = services.filter((s) => v.services.includes(s.id)).map((s) => s.title);
	return [
		`Engagement: ${engagement}`,
		`Services: ${chosen.length ? chosen.join(", ") : "Not specified"}`,
		`Company or project: ${v.company || "Not specified"}`,
		`Budget: ${v.budget || "Not specified"}`,
		`Preferred contact: ${v.contactMethod}${v.phone ? ` (${v.phone})` : ""}`,
		"",
		v.message.trim(),
	].join("\n");
}

const inputClass =
	"block w-full rounded-xl border bg-white px-3.5 py-3 text-base text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] duration-fast focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

function Field({ id, label, optional, error, hint, children }) {
	return (
		<div>
			<label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink">
				{label}
				{optional && <span className="text-xs font-normal text-ink-muted">Optional</span>}
			</label>
			{hint && (
				<p id={`${id}-hint`} className="mb-2 text-xs text-ink-muted">
					{hint}
				</p>
			)}
			{children}
			{error && (
				<p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-[#B42318]">
					<AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
					{error}
				</p>
			)}
		</div>
	);
}

export default function ContactForm() {
	const uid = useId();
	const id = (name) => `${uid}-${name}`;
	const [values, setValues] = useState(initial);
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	const formRef = useRef(null);
	const mountedAt = useRef(0);

	useEffect(() => {
		mountedAt.current = Date.now();
		const engagement = new URLSearchParams(window.location.search).get("engagement");
		if (ENGAGEMENTS.some((e) => e.id === engagement)) setValues((v) => ({ ...v, engagement }));
	}, []);

	const update = (name, value) => {
		setValues((v) => {
			const next = { ...v, [name]: value };
			if (submitted) setErrors(validate(next));
			return next;
		});
	};

	const toggleService = (serviceId) =>
		update(
			"services",
			values.services.includes(serviceId)
				? values.services.filter((s) => s !== serviceId)
				: [...values.services, serviceId],
		);

	const describedBy = (name, hint = false) =>
		[hint && `${id(name)}-hint`, errors[name] && `${id(name)}-error`].filter(Boolean).join(" ") || undefined;

	async function onSubmit(e) {
		e.preventDefault();
		setSubmitted(true);
		const found = validate(values);
		setErrors(found);
		if (Object.keys(found).length) {
			const first = Object.keys(found)[0];
			formRef.current?.querySelector(`[data-field="${first}"]`)?.focus();
			return;
		}

		// Spam checks: a filled honeypot or an instant submission is treated as a bot.
		// Show success without sending so bots get no signal.
		if (values.website || Date.now() - mountedAt.current < 2500) {
			setStatus("success");
			return;
		}

		setStatus("sending");
		try {
			const { default: emailjs } = await import("@emailjs/browser");
			const engagementLabel = ENGAGEMENTS.find((x) => x.id === values.engagement)?.label;
			await emailjs.send(
				site.emailjs.serviceId,
				site.emailjs.templateId,
				{
					from_name: values.name.trim(),
					from_email: values.email.trim(),
					reply_to: values.email.trim(),
					subject: `[${engagementLabel}] New inquiry from ${values.name.trim()}${values.company ? ` (${values.company.trim()})` : ""}`,
					message: composeMessage(values),
				},
				{
					publicKey: site.emailjs.publicKey,
					blockHeadless: true,
					limitRate: { id: "contact-form", throttle: 30000 },
				},
			);
			track(EVENTS.contactSubmitted, { engagement: values.engagement });
			setStatus("success");
			setValues(initial);
			setSubmitted(false);
		} catch {
			setStatus("error");
		}
	}

	if (status === "success") {
		return (
			<div role="status" className="card flex flex-col items-start gap-4 p-8 sm:p-10">
				<span className="grid h-12 w-12 place-items-center rounded-full bg-mint-50 text-mint-700">
					<CheckCircle2 className="h-6 w-6" aria-hidden="true" />
				</span>
				<h3 className="text-h3 font-semibold text-ink">Thank you, your message has been sent</h3>
				<p className="text-ink-muted">
					I read every inquiry personally and usually reply within 24 hours. If it is urgent, you can also
					call me on{" "}
					<a className="font-medium text-brand-700 underline" href={`tel:${site.phone.replace(/\s+/g, "")}`}>
						{site.phone}
					</a>
					.
				</p>
				<Button variant="secondary" onClick={() => setStatus("idle")}>
					Send another message
				</Button>
			</div>
		);
	}

	return (
		<form ref={formRef} noValidate onSubmit={onSubmit} className="card grid gap-6 p-6 sm:p-8" aria-describedby={`${uid}-privacy`}>
			<div className="grid gap-6 sm:grid-cols-2">
				<Field id={id("name")} label="Name" error={errors.name}>
					<input
						id={id("name")}
						data-field="name"
						name="name"
						autoComplete="name"
						value={values.name}
						onChange={(e) => update("name", e.target.value)}
						aria-invalid={!!errors.name}
						aria-describedby={describedBy("name")}
						aria-required="true"
						maxLength={100}
						className={cn(inputClass, errors.name ? "border-[#F04438]" : "border-line-strong")}
					/>
				</Field>
				<Field id={id("email")} label="Business email" error={errors.email}>
					<input
						id={id("email")}
						data-field="email"
						name="email"
						type="email"
						autoComplete="email"
						inputMode="email"
						value={values.email}
						onChange={(e) => update("email", e.target.value)}
						aria-invalid={!!errors.email}
						aria-describedby={describedBy("email")}
						aria-required="true"
						maxLength={160}
						className={cn(inputClass, errors.email ? "border-[#F04438]" : "border-line-strong")}
					/>
				</Field>
			</div>

			<Field id={id("company")} label="Company or project name" optional>
				<input
					id={id("company")}
					name="company"
					autoComplete="organization"
					value={values.company}
					onChange={(e) => update("company", e.target.value)}
					maxLength={120}
					className={cn(inputClass, "border-line-strong")}
				/>
			</Field>

			<fieldset aria-describedby={errors.engagement ? `${id("engagement")}-error` : undefined}>
				<legend className="mb-2 text-sm font-medium text-ink">How would you like to work together?</legend>
				<div className="grid gap-2 sm:grid-cols-3">
					{ENGAGEMENTS.map((opt, i) => (
						<label
							key={opt.id}
							className={cn(
								"flex cursor-pointer flex-col rounded-xl border p-3.5 transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-100",
								values.engagement === opt.id ? "border-brand-500 bg-brand-50" : "border-line-strong hover:bg-sand-50",
							)}>
							<span className="flex items-center gap-2 text-sm font-medium text-ink">
								<input
									type="radio"
									name="engagement"
									value={opt.id}
									data-field={i === 0 ? "engagement" : undefined}
									checked={values.engagement === opt.id}
									onChange={() => update("engagement", opt.id)}
									aria-invalid={!!errors.engagement}
									className="h-4 w-4 accent-brand-600"
								/>
								{opt.label}
							</span>
							<span className="mt-1 pl-6 text-xs text-ink-muted">{opt.hint}</span>
						</label>
					))}
				</div>
				{errors.engagement && (
					<p id={`${id("engagement")}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-[#B42318]">
						<AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
						{errors.engagement}
					</p>
				)}
			</fieldset>

			<fieldset>
				<legend className="mb-2 flex w-full items-baseline justify-between text-sm font-medium text-ink">
					Services you need
					<span className="text-xs font-normal text-ink-muted">Optional, choose any</span>
				</legend>
				<div className="flex flex-wrap gap-2">
					{services.map((s) => {
						const checked = values.services.includes(s.id);
						return (
							<label
								key={s.id}
								className={cn(
									"inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-100",
									checked ? "border-brand-500 bg-brand-50 text-brand-700" : "border-line-strong text-ink-soft hover:bg-sand-50",
								)}>
								<input
									type="checkbox"
									name="services"
									value={s.id}
									checked={checked}
									onChange={() => toggleService(s.id)}
									className="h-4 w-4 accent-brand-600"
								/>
								{s.title}
							</label>
						);
					})}
				</div>
			</fieldset>

			<Field id={id("budget")} label="Budget range" optional>
				<select
					id={id("budget")}
					name="budget"
					value={values.budget}
					onChange={(e) => update("budget", e.target.value)}
					className={cn(inputClass, "border-line-strong")}>
					<option value="">Select a range</option>
					{BUDGETS.map((b) => (
						<option key={b} value={b}>
							{b}
						</option>
					))}
				</select>
			</Field>

			<Field
				id={id("message")}
				label="Project or role description"
				hint="What do you want to build or improve, who is it for, and is there a deadline?"
				error={errors.message}>
				<textarea
					id={id("message")}
					data-field="message"
					name="message"
					rows={6}
					value={values.message}
					onChange={(e) => update("message", e.target.value)}
					aria-invalid={!!errors.message}
					aria-describedby={describedBy("message", true)}
					aria-required="true"
					maxLength={4000}
					className={cn(inputClass, "resize-y", errors.message ? "border-[#F04438]" : "border-line-strong")}
				/>
			</Field>

			<div className="grid gap-6 sm:grid-cols-2">
				<fieldset>
					<legend className="mb-2 text-sm font-medium text-ink">Preferred contact method</legend>
					<div className="grid gap-2">
						{CONTACT_METHODS.map((m) => (
							<label key={m} className="inline-flex items-center gap-2 text-sm text-ink-soft">
								<input
									type="radio"
									name="contactMethod"
									value={m}
									checked={values.contactMethod === m}
									onChange={() => update("contactMethod", m)}
									className="h-4 w-4 accent-brand-600"
								/>
								{m}
							</label>
						))}
					</div>
				</fieldset>
				<Field
					id={id("phone")}
					label="Phone number"
					optional={values.contactMethod !== "Phone or WhatsApp"}
					error={errors.phone}>
					<input
						id={id("phone")}
						data-field="phone"
						name="phone"
						type="tel"
						autoComplete="tel"
						inputMode="tel"
						value={values.phone}
						onChange={(e) => update("phone", e.target.value)}
						aria-invalid={!!errors.phone}
						aria-describedby={describedBy("phone")}
						maxLength={30}
						className={cn(inputClass, errors.phone ? "border-[#F04438]" : "border-line-strong")}
					/>
				</Field>
			</div>

			{/* Honeypot: hidden from people and assistive technology. */}
			<div aria-hidden="true" className="visually-hidden">
				<label htmlFor={id("website")}>Website</label>
				<input
					id={id("website")}
					name="website"
					tabIndex={-1}
					autoComplete="off"
					value={values.website}
					onChange={(e) => update("website", e.target.value)}
				/>
			</div>

			{status === "error" && (
				<div role="alert" className="flex gap-3 rounded-xl border border-[#FDA29B] bg-[#FEF3F2] p-4 text-sm text-[#912018]">
					<AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
					<p>
						Your message could not be sent. Please try again in a moment, or call me on{" "}
						<a className="font-medium underline" href={`tel:${site.phone.replace(/\s+/g, "")}`}>
							{site.phone}
						</a>
						.
					</p>
				</div>
			)}

			<div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
				<p id={`${uid}-privacy`} className="max-w-md text-xs leading-relaxed text-ink-muted">
					Your details are sent to me by email through EmailJS and used only to reply to your inquiry. Read the{" "}
					<Link to="/privacy" className="font-medium text-brand-700 underline">
						privacy policy
					</Link>
					.
				</p>
				<Button type="submit" size="lg" disabled={status === "sending"} className="shrink-0">
					{status === "sending" ? (
						<>
							<LoaderCircle className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
							Sending…
						</>
					) : (
						<>
							Send inquiry
							<Send className="h-4 w-4" aria-hidden="true" />
						</>
					)}
				</Button>
			</div>
		</form>
	);
}
