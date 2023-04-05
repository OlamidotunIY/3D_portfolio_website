import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

// template_xmh6y7g  -- template ID
// service_egl1w0r  -- service ID
// 05m8FYB7ZhMJXpB1h -- public key

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				'service_egl1w0r',
				'template_xmh6y7g',
				{
					from_name: form.name,
					to_name: 'Iyanda',
					from_email: form.email,
					to_email: 'olamidotun225@gmail.com',
					message: form.message,
				},
				'05m8FYB7ZhMJXpB1h'
			)
			.then(
				() => {
					setLoading(false);
					alert('Thank you for reaching out to us');

					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					alert('error please retry');
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 roinded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label htmlFor="" className="flex flex-col">
						<span className="font-medium text-white mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							id=""
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label htmlFor="" className="flex flex-col">
						<span className="font-medium text-white mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							id=""
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label htmlFor="" className="flex flex-col">
						<span className="font-medium text-white mb-4">Your Message</span>
						<textarea
							rows="7"
							name="message"
							id=""
							value={form.message}
							onChange={handleChange}
							placeholder="Write your message"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl"
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
