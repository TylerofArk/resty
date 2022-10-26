import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from '../components/form';

describe('Form Component', () => {
	it('should make an API call', () => {
		
		let handleApiCall = jest.fn();

		render(<Form handleApiCall = { handleApiCall}/>);
		let button = screen.getByTestId('button');
		fireEvent.click(button)
		expect(handleApiCall).toHaveBeenCalled();
	});
})