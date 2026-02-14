import { useReducer } from "react";
import BookingForm from "./BookingForm";

// Step 2: Initialize available times
export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Step 2: Update times based on selected date
export function updateTimes(state, action) {
  // For now, return the same available times regardless of the date
  // Later, this will be updated to fetch times based on the selected date
  switch (action.type) {
    case "UPDATE_TIMES":
      // You can add logic here to filter times based on action.date
      return state;
    default:
      return state;
  }
}

function Main() {
  // Step 1 & 2: Use reducer instead of useState
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
