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
      <label htmlFor="res-date">Choose date *</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={getTodayDate()}
        onChange={handleDateChange}
        required
        aria-required="true"
        aria-label="Choose reservation date"
      />

      <label htmlFor="res-time">Choose time *</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
        aria-label="Choose reservation time"
      >
        <option value="">Select a time</option>
        {times.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests *</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
        aria-required="true"
        aria-label="Number of guests"
      />

      <label htmlFor="occasion">Occasion *</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
        aria-label="Select occasion"
      >
        <option value="">Select an occasion</option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid()}
        aria-label="Submit reservation"
      />
    </form>
  );
}

export default BookingForm;
