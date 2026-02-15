import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // State variables for each form field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Safety check: if availableTimes is undefined or empty, use fallback
  const times =
    availableTimes && availableTimes.length > 0
      ? availableTimes
      : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Calculate if form is valid
  const isFormValid = () => {
    return (
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ""
    );
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Handle date change and dispatch to update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Dispatch action to update available times based on selected date
    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Double-check validation before submitting
    if (!isFormValid()) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Create form data object
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    console.log("Submitting form:", formData);

    // Call the submitForm function passed from BookingPage
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Reservation form">
      <label htmlFor="res-date">
        Choose date <span aria-hidden="true">*</span>
        <span className="visually-hidden">required</span>
      </label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={date}
        min={getTodayDate()}
        onChange={handleDateChange}
        required
        aria-required="true"
        aria-describedby="date-description"
      />
      <span id="date-description" className="visually-hidden">
        Select your preferred reservation date. Past dates are not available.
      </span>

      <label htmlFor="res-time">
        Choose time <span aria-hidden="true">*</span>
        <span className="visually-hidden">required</span>
      </label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
        aria-describedby="time-description"
      >
        <option value="">Select a time</option>
        {times.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <span id="time-description" className="visually-hidden">
        Select your preferred reservation time from available slots.
      </span>

      <label htmlFor="guests">
        Number of guests <span aria-hidden="true">*</span>
        <span className="visually-hidden">required</span>
      </label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
        aria-required="true"
        aria-describedby="guests-description"
      />
      <span id="guests-description" className="visually-hidden">
        Enter the number of guests, between 1 and 10.
      </span>

      <label htmlFor="occasion">
        Occasion <span aria-hidden="true">*</span>
        <span className="visually-hidden">required</span>
      </label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
        aria-describedby="occasion-description"
      >
        <option value="">Select an occasion</option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <span id="occasion-description" className="visually-hidden">
        Select the occasion for your reservation.
      </span>

      <button
        type="submit"
        disabled={!isFormValid()}
        aria-label="On Click"
        aria-describedby="submit-description"
      >
        Make Your Reservation
      </button>
      <span id="submit-description" className="visually-hidden">
        Submit your reservation request. Button is enabled when all fields are
        completed.
      </span>
    </form>
  );
}

export default BookingForm;
