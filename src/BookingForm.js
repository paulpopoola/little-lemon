import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // ALL YOUR EXISTING STATE - UNCHANGED
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Safety check - UNCHANGED
  const times =
    availableTimes && availableTimes.length > 0
      ? availableTimes
      : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // ALL YOUR EXISTING FUNCTIONS - UNCHANGED
  const isFormValid = () => {
    return (
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ""
    );
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    console.log("Submitting form:", formData);
    submitForm(formData);
  };

  // ONLY ADDED WRAPPER DIVS AND UPDATED CLASSES - FUNCTIONALITY INTACT
  return (
    <form onSubmit={handleSubmit} aria-label="Reservation form">
      <div className="form-field">
        <label htmlFor="res-date">
          Choose date <span aria-hidden="true">*</span>
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
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">
          Choose time <span aria-hidden="true">*</span>
        </label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select a time</option>
          {times.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="guests">
          Number of guests <span aria-hidden="true">*</span>
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
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">
          Occasion <span aria-hidden="true">*</span>
        </label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={!isFormValid()}
        aria-label="On Click"
        className="btn btn-primary"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
