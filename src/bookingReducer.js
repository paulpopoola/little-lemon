// Initialize available times using the API
export function initializeTimes() {
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
export function updateTimes(state, action) {
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
