import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    // Clear mocks before each test
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  // ========== STEP 1: HTML5 VALIDATION ATTRIBUTES ==========

  test("date input has required attribute", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test('date input has type="date"', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("date input has min attribute set to today or later", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("min");

    // Verify min date is today's date
    const today = new Date().toISOString().split("T")[0];
    expect(dateInput.getAttribute("min")).toBe(today);
  });

  test("time select has required attribute", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input has required attribute", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("required");
  });

  test('guests input has type="number"', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
  });

  test('guests input has min="1" attribute', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
  });

  test('guests input has max="10" attribute', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required attribute", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });

  // ========== STEP 2: JAVASCRIPT VALIDATION - INVALID STATES ==========

  test("submit button is disabled when form is empty (invalid state)", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test("submit button is disabled when date is missing (invalid state)", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    // Fill all fields except date
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test("submit button is disabled when time is missing (invalid state)", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    // Fill all fields except time
    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test("submit button is disabled when occasion is missing (invalid state)", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    // Fill all fields except occasion
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });

    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    expect(submitButton).toBeDisabled();
  });

  // ========== STEP 2: JAVASCRIPT VALIDATION - VALID STATE ==========

  test("submit button is enabled when all fields are valid (valid state)", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    // Fill all fields with valid data
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    expect(submitButton).not.toBeDisabled();
  });

  test("form calls submitForm when submitted with valid data", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    // Fill all fields with valid data
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    // Click the submit button instead of submitting form directly
    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    fireEvent.click(submitButton);

    // Verify submitForm was called with correct data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2024-12-25",
      time: "18:00",
      guests: 4,
      occasion: "birthday",
    });
  });

  test("date change dispatches UPDATE_TIMES action", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />,
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });

    // Verify dispatch was called with correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2024-12-25",
    });
  });
});
