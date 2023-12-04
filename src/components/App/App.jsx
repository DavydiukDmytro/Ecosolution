import { Container } from '../Container';
import { Header } from '../Header';
import { SectionAbout } from '../SectionAbout';
import SectionCases from '../SectionCases/SectionCases';
import { SectionElectricity } from '../SectionElectricity';
import { SectionMain } from '../SectionMain';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<SectionMain />
					<SectionAbout />
					<SectionElectricity />
					<SectionCases />
				</Container>
			</main>
		</>
	);
};
