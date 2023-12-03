import { Container } from '../Container';
import { Header } from '../Header';
import { SectionAbout } from '../SectionAbout';
import { SectionMain } from '../SectionMain';

export const App = () => {
	return (
		<>
			<Container>
				<Header />
				<main>
					<SectionMain />
					<SectionAbout />
				</main>
			</Container>
		</>
	);
};
