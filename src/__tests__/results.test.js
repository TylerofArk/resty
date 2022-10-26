import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Results from '../components/results';

describe('Result Component', () => {
	it('should render data', () => {
		let data = {
			name: 'bulbasaur',
			url: 'https://pokeapi.cp/api/v2/pokemon/1/'
		};

		render(<Results data = {data} />);
		let preText = screen.getByTestId('results');
		expect(preText).toHaveTextContent('bulbasaur');
	})
})