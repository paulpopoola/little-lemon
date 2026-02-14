import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('renders "Choose date" label', () => {
  // Mock props
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );

  const labelElement = screen.getByText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});

test('renders "Choose time" label', () => {
  // Mock props
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );

  const labelElement = screen.getByText(/choose time/i);
  expect(labelElement).toBeInTheDocument();
});

test("renders submit button with correct text", () => {
  // Mock props
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );

  const submitButton = screen.getByDisplayValue(/make your reservation/i);
  expect(submitButton).toBeInTheDocument();
});
