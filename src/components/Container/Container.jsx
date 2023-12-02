import { ContainerMain } from './Container.styled';

// eslint-disable-next-line react/prop-types
export const Container = ({ children, menu }) => {
	return <ContainerMain menu={menu}>{children}</ContainerMain>;
};
