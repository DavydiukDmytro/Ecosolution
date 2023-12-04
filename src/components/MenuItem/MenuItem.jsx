import { ItemMenu, Link, LinkText } from './MenuItem.styled';
import svgSprite from '../../assets/images/svgSprite.svg';
import PropTypes from 'prop-types';
import { scrollToSection } from '../../utils/scrollToSection';
import { useEffect, useState } from 'react';

export const MenuItem = ({ closeMenu, element }) => {
	const [isActive, setIsActive] = useState(false);

	const handleScroll = () => {
		const sectionId = element.toLowerCase();
		const section = document.getElementById(sectionId);

		if (section) {
			const offset = section.offsetTop - 50;
			const currentScroll = window.pageYOffset;

			if (currentScroll >= offset) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		}
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ItemMenu>
			<Link
				active={isActive}
				href={`#${element.toLowerCase()}`}
				onClick={(e) => {
					closeMenu();
					scrollToSection(element, e);
				}}
			>
				<LinkText>{element}</LinkText>
				<svg width={16} height={16}>
					<use xlinkHref={svgSprite + '#icon-arrow'} />
				</svg>
			</Link>
		</ItemMenu>
	);
};

MenuItem.propTypes = {
	element: PropTypes.string.isRequired,
	closeMenu: PropTypes.func,
};
