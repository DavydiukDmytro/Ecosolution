import { Logo } from '../Logo';
import { ButtonList, ButtonMenu, HeaderContainer } from './Header.styled';
import menu from '../../assets/images/menu.svg';
import { Menu } from '../Menu';
import { useState } from 'react';
import { ButtonGetInTouch } from '../ButtonGetInTouch';

export const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const closeMenu = () => {
		setIsOpenMenu(false);
	};

	return (
		<>
			<HeaderContainer>
				<Logo />
				<ButtonList>
					<li>
						<ButtonMenu type='button' onClick={() => setIsOpenMenu(true)}>
							<img width={16} height={16} src={menu} />
						</ButtonMenu>
					</li>
					<li>
						<ButtonGetInTouch />
					</li>
				</ButtonList>
			</HeaderContainer>
			{isOpenMenu && <Menu closeMenu={closeMenu} />}
		</>
	);
};
