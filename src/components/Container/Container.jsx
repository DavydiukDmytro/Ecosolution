import PropTypes from 'prop-types';
import { ContainerMain } from './Container.styled';

export const Container = ({ children, menu }) => {
	return <ContainerMain menu={menu}>{children}</ContainerMain>;
};

Container.propTypes = {
	menu: PropTypes.any,
	children: PropTypes.node,
};
