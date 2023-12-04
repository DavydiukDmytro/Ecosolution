import { useEffect, useState } from 'react';
import { Section } from '../Section';
import { Counter, Title, Units } from './SectionElectricity.styled';
import { formatNumberWithCommas } from '../../utils/formatNumberWithCommas';

export const SectionElectricity = () => {
	const [counter, setCounter] = useState(1134147814);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Section center={true}>
			<Title>Electricity we produced for all time</Title>
			<Counter>
				{formatNumberWithCommas(counter)} <Units>kWh</Units>
			</Counter>
		</Section>
	);
};
