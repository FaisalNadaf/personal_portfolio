/** @format */

import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import MagnetoButton from "../MagnetoButton";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	gap: 12px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

const Title = styled.div`
	font-size: 52px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${({ theme }) => theme.text_primary};
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	font-weight: 600;
	color: ${({ theme }) => theme.text_secondary};
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const ContactForm = styled.form`
	width: 95%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	background-color: rgba(17, 25, 40, 0.83);
	border: 1px solid rgba(255, 255, 255, 0.125);
	padding: 32px;
	border-radius: 12px;
	box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
	margin-top: 28px;
	gap: 12px;
`;

const ContactTitle = styled.div`
	font-size: 28px;
	margin-bottom: 6px;
	font-weight: 600;
	color: ${({ theme }) => theme.text_primary};
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContactInput = styled.input`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary + 50};
	outline: none;
	font-size: 18px;
	color: ${({ theme }) => theme.text_primary};
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactInputMessage = styled.textarea`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary + 50};
	outline: none;
	font-size: 18px;
	color: ${({ theme }) => theme.text_primary};
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactButton = styled.input`
	width: 100%;
	text-decoration: none;
	text-align: center;
	background: hsla(271, 100%, 50%, 1);
	padding: 13px 16px;
	margin-top: 2px;
	border-radius: 12px;
	border: none;
	color: ${({ theme }) => theme.text_primary};
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	&:disabled {
		background: gray;
		cursor: not-allowed;
	}
`;

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false); // State to manage loading

	const handelSubmit = (e) => {
		e.preventDefault();

		// Simple validation
		const formData = new FormData(form.current);
		const fields = ["from_email", "from_name", "subject", "message"];
		for (let field of fields) {
			if (!formData.get(field)) {
				toast("Please fill in all fields.");
				return;
			}
		}

		setLoading(true); // Set loading to true
		emailjs
			.sendForm(
				"service_br00yk5", // Replace with your EmailJS service ID
				"template_igrpbae", // Replace with your EmailJS template ID
				form.current, // Reference to the form element
				"w95W4XH0su1-P8i_q", // Your EmailJS public key
			)
			.then(
				(result) => {
					toast("Message Sent! I Will Reach You Soon");
					form.current.reset(); // Reset the form after successful submission
					setLoading(false); // Reset loading state
				},
				(error) => {
					toast("An error occurred: " + error.text); // Show error message
					setLoading(false); // Reset loading state
				},
			);
	};

	return (
		<Container id="Education">
			<Wrapper>
				<Title>Contact</Title>
				<Desc style={{ marginBottom: "40px" }}>
					Feel free to reach out to me for any questions or opportunities!
				</Desc>
				<ContactForm
					ref={form}
					onSubmit={handelSubmit}>
					<ContactTitle>Email Me 🚀</ContactTitle>
					<ContactInput
						type="email"
						placeholder="Your Email"
						name="from_email"
					/>
					<ContactInput
						placeholder="Your Name"
						name="from_name"
					/>
					<ContactInput
						placeholder="Subject"
						name="subject"
					/>
					<ContactInputMessage
						placeholder="Message"
						name="message"
						rows={4}
					/>
					<ButtonContainer>
						{" "}
						<MagnetoButton
							disabled={loading}
							type="submit"
							text={loading ? "Sending..." : "Send"}
						/>
					</ButtonContainer>

					{/* <ContactButton
						type="submit"
						value={loading ? "Sending..." : "Send"}
						disabled={loading}
					/> */}
				</ContactForm>
			</Wrapper>
		</Container>
	);
};

export default Contact;
