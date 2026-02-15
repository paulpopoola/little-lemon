import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./bookingReducer";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI) {
      const success = window.submitAPI(formData);
      if (success) {
        navigate("/confirmed");
      }
    }
  };

  return (
    <main className="booking-page-wrapper">
      <div className="booking-hero-section">
        <div className="booking-content">
          <h1>Reserve a Table</h1>
          <p>Book your unforgettable dining experience</p>

          <div className="booking-form-card">
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookingPage;
