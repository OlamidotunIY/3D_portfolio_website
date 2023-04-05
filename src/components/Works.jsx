import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import { projects } from '../constant';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	name,
	description,
	tags,
	image,
	source_code_link,
	index,
}) => (
	<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.7)}>
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
		>
			<div className="relative w-full h-[230px]">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover rounded-2xl"
				/>
				<div className="absolute inset-0 justify-end flex m-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, '_blank')}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<img
							src={github}
							alt="github"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>
			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p key={tag.name} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</Tilt>
	</motion.div>
);

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My works</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
					suscipit culpa hic corporis doloremque aliquam dolores qui enim
					aliquid. Inventore quidem soluta sint illum quisquam voluptatem in
					laboriosam tenetur cumque, est saepe itaque animi recusandae eligendi
					voluptas, ea magni unde aut magnam, quae iste quis doloribus
					exercitationem numquam. Explicabo, aliquam.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
