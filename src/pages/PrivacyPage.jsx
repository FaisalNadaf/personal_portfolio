/** @format */

import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader";
import { site } from "../data/site";

export default function PrivacyPage() {
	return (
		<>
			<PageHeader
				crumb="Privacy Policy"
				title="Privacy policy"
				description="This website is a portfolio. It collects personal information only when you choose to send a message."
			/>
			<section className="section">
				<div className="container-page">
					<div className="max-w-prose space-y-8 text-[0.9375rem] leading-relaxed text-ink-soft [&_h2]:mb-3 [&_h2]:text-h3 [&_h2]:font-semibold [&_h2]:text-ink">
						<div>
							<h2>Who is responsible</h2>
							<p>
								This website belongs to {site.name}, a developer based in {site.location.city}, {site.location.region},{" "}
								{site.location.country}. Questions about this policy can be sent through the{" "}
								<Link to="/contact" className="font-medium text-brand-700 underline">
									contact form
								</Link>{" "}
								or by phone on {site.phone}.
							</p>
						</div>
						<div>
							<h2>What the contact form collects</h2>
							<p>
								When you send an inquiry, the form collects the details you type: your name, email address, and
								optionally your company or project name, phone number, budget range, the services you are
								interested in, your preferred contact method and your message.
							</p>
						</div>
						<div>
							<h2>How it is sent and used</h2>
							<p>
								Messages are delivered to me by email through EmailJS, a third-party email delivery service. I use
								your details only to reply to your inquiry and to discuss the work you asked about. I do not sell or
								share them, and I do not add you to any mailing list.
							</p>
						</div>
						<div>
							<h2>Cookies and analytics</h2>
							<p>
								This website does not use advertising or analytics cookies. To limit spam, the contact form stores a
								short-lived timestamp in your browser&apos;s local storage after you send a message.
							</p>
						</div>
						<div>
							<h2>Your choices</h2>
							<p>
								You can ask me to delete the messages you sent or to tell you what information I hold about you.
								Contact me and I will respond as soon as I can.
							</p>
						</div>
						<p className="text-sm text-ink-muted">Last updated: 19 October 2026.</p>
					</div>
				</div>
			</section>
		</>
	);
}
