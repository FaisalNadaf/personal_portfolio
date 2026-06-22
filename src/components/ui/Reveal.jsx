/** @format */

import React from "react";
import { motion } from "framer-motion";

const Reveal = ({
	children,
	delay = 0,
	y = 16,
	once = true,
	className = "",
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once, margin: "-80px" }}
			transition={{
				duration: 0.55,
				delay,
				ease: [0.22, 0.61, 0.36, 1],
			}}>
			{children}
		</motion.div>
	);
};

export default Reveal;
