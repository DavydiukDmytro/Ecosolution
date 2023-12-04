import { ButtonLearnMore } from '../ButtonLearnMore/ButtonLearnMore';
import { Section } from '../Section';
import { Img, Item, LearnMoreWrapper, List, MainWrapper, Text, Title } from './SectionMain.styled';
import windTurbineM1x from '../../assets/images/wind-turbine/mobile/wind-turbine1x.jpg';
import windTurbineM2x from '../../assets/images/wind-turbine/mobile/wind-turbine2x.jpg';
import windTurbineM3x from '../../assets/images/wind-turbine/mobile/wind-turbine3x.jpg';
import windTurbineT1x from '../../assets/images/wind-turbine/tablet/wind-turbineT1x.jpg';
import windTurbineT2x from '../../assets/images/wind-turbine/tablet/wind-turbineT2x.jpg';
import windTurbineT3x from '../../assets/images/wind-turbine/tablet/wind-turbineT3x.jpg';
import windTurbineL1x from '../../assets/images/wind-turbine/laptop/wind-turbineL1x.jpg';
import windTurbineL2x from '../../assets/images/wind-turbine/laptop/wind-turbineL2x.jpg';
import windTurbineL3x from '../../assets/images/wind-turbine/laptop/wind-turbineL3x.jpg';

export const SectionMain = () => {
	return (
		<Section hero={true}>
			<MainWrapper>
				<Title>RENEWABLE ENERGY For any task</Title>
				<LearnMoreWrapper>
					<Text>
						Development and implementation of renewable non-polluting energy sources, generating
						power generation using energy wind, sun, water, biomass
					</Text>
					<ButtonLearnMore />
				</LearnMoreWrapper>
			</MainWrapper>
			<List>
				<Item>
					<Text center={true}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Text>
				</Item>
				<Item>
					<Text center={true}>office@ecosolution.com</Text>
				</Item>
				<Item>
					<Text center={true}>ecosolution © 2023</Text>
				</Item>
			</List>
			<picture>
				<source
					media='(max-width: 767px)'
					srcSet={`${windTurbineM1x} 1x, ${windTurbineM2x} 2x, ${windTurbineM3x} 3x`}
				/>
				<source
					media='(min-width: 768px) and (max-width: 1279px)'
					srcSet={`${windTurbineT1x} 1x, ${windTurbineT2x} 2x, ${windTurbineT3x} 3x`}
				/>
				<source
					media='(min-width: 1280px)'
					srcSet={`${windTurbineL1x} 1x, ${windTurbineL2x} 2x, ${windTurbineL3x} 3x`}
				/>
				<Img src={`${windTurbineT1x}`} alt='Wind turbine clean energy' />
			</picture>
		</Section>
	);
};
