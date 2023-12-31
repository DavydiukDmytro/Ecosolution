import { SectionWrapper } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ name, center, hero, children }) => {
	return (
		<SectionWrapper id={name} center={center} hero={hero}>
			{children}
		</SectionWrapper>
	);
};

Section.propTypes = {
	center: PropTypes.bool,
	hero: PropTypes.bool,
	children: PropTypes.node,
};
