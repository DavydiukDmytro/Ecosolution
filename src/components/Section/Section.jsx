import { SectionWrapper } from './Section.styled';

// eslint-disable-next-line react/prop-types
export const Section = ({ center, children }) => {
	return <SectionWrapper center={center}>{children}</SectionWrapper>;
};
