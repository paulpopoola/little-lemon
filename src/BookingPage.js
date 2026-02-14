import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

// Initialize available times using the API
function initializeTimes() {
  const today = new Date();

  if (window.fetchAPI) {
    const times = window.fetchAPI(today);
    return times && times.length > 0 ? times : getDefaultTimes();
  }

  return getDefaultTimes();
}

// Helper function to return default times
function getDefaultTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Update times based on selected date using the API
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (window.fetchAPI && action.date) {
        const selectedDate = new Date(action.date);
        const times = window.fetchAPI(selectedDate);
        return times && times.length > 0 ? times : state;
      }
      return state;
    default:
      return state;
  }
}

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
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <p>
        Book your table at Little Lemon for an unforgettable dining experience!
      </p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
