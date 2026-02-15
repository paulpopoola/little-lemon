import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./bookingReducer";

function BookingPage() {
  // Use reducer to manage available times
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  // Get navigate function from React Router
  const navigate = useNavigate();

  // Submit form function
  const submitForm = (formData) => {
    // Call the API to submit the form
    if (window.submitAPI) {
      const success = window.submitAPI(formData);

      // If successful, navigate to confirmation page
      if (success) {
        navigate("/confirmed");
      }
    }
  };

  return (
    <main role="main" aria-label="Reservation page">
      <section className="booking-page" aria-labelledby="booking-heading">
        <h1 id="booking-heading">Reserve a Table</h1>
        <p>
          Book your table at Little Lemon for an unforgettable dining
          experience!
        </p>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingPage;
