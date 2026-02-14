import { useReducer } from "react";
import BookingForm from "./BookingForm";

// Step 2: Initialize available times using the API
export function initializeTimes() {
  // Create a Date object for today
  const today = new Date();

  // Use the API to fetch available times for today
  if (window.fetchAPI) {
    const times = window.fetchAPI(today);
    return times && times.length > 0 ? times : getDefaultTimes();
  }

  // Fallback for testing environment or if API fails
  return getDefaultTimes();
}

// Helper function to return default times
function getDefaultTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Step 2: Update times based on selected date using the API
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Use the API to fetch available times for the selected date
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

function Main() {
  // Use reducer to manage available times
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
