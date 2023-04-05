import React from 'react';

// Ball canvas
import { BallCanvas } from './canvas';

// section wrapper
import { SectionWrapper } from '../hoc';

// import technologies
import { technologies } from '../constant';

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech, index) => (
				<div className="w-20 h-28" key={tech.name}>
					<BallCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, '');
