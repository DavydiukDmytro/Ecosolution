import { SectionWrapper } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ center, children }) => {
	return <SectionWrapper center={center}>{children}</SectionWrapper>;
};

Section.propTypes = {
	center: PropTypes.bool,
	children: PropTypes.node,
};
