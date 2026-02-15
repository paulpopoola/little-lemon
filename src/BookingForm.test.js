import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders "Choose date" label', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(
    <BookingForm 
      availableTimes={mockAvailableTimes} 
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  
  const labelElement = screen.getByText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});

test('submit button is disabled when form is invalid', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(
    <BookingForm 
      availableTimes={mockAvailableTimes} 
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  
  const submitButton = screen.getByDisplayValue(/make your reservation/i);
  expect(submitButton).toBeDisabled();
});