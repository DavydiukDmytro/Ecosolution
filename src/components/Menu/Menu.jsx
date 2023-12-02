import { createPortal } from 'react-dom';
import svgSprite from '../../assets/images/svgSprite.svg';
import {
	ButtonClose,
	ButtonCloseText,
	ContainerModal,
	ItemLink,
	Link,
	ListLink,
	Overlay,
	Svg,
} from './Menu.styled';
import { useEffect } from 'react';
import { MenuItem } from '../MenuItem';

const modalRoot = document.getElementById('modal-root');

export const Menu = ({ closeMenu }) => {
	const menuList = ['Main', 'About', 'Cases', 'FAQ', 'Contact Us'];
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleBackdropClick = (e) => {
		if (e.currentTarget === e.target) {
			closeMenu();
		}
	};

	const handleKeyDown = (e) => {
		if (e.code === 'Escape') {
			closeMenu();
		}
	};

	return createPortal(
		<Overlay onClick={handleBackdropClick}>
			<ContainerModal>
				<div>
					<ButtonClose type='button' onClick={() => closeMenu()}>
						<svg width={20} height={20} style={{ transform: 'translateX(-4px)' }}>
							<use xlinkHref={svgSprite + '#icon-close'} />
						</svg>
						<ButtonCloseText>close</ButtonCloseText>
					</ButtonClose>
					<nav>
						<ul>
							{menuList.map((element) => (
								<MenuItem element={element} key={element} />
							))}
						</ul>
					</nav>
				</div>
				<ListLink>
					<ItemLink>
						<Link href='' socialLink={true}>
							<Svg width={24} height={24}>
								<use xlinkHref={svgSprite + '#icon-facebook'} />
							</Svg>
						</Link>
					</ItemLink>
					<ItemLink>
						<Link href='' socialLink={true}>
							<Svg width={24} height={24}>
								<use xlinkHref={svgSprite + '#icon-instagram'} />
							</Svg>
						</Link>
					</ItemLink>
				</ListLink>
			</ContainerModal>
		</Overlay>,
		modalRoot
	);
};
