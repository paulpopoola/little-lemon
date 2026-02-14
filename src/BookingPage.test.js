import { initializeTimes, updateTimes } from "./bookingReducer";

// Mock the fetchAPI function
describe("Booking Reducer Functions", () => {
  beforeEach(() => {
    // Mock window.fetchAPI before each test
    window.fetchAPI = jest.fn((date) => {
      // Return different times based on date for testing
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    });
  });

  afterEach(() => {
    // Clean up after each test
    delete window.fetchAPI;
  });

  test("initializeTimes returns the correct expected value from API", () => {
    const result = initializeTimes();

    // Test that it returns an array
    expect(Array.isArray(result)).toBe(true);

    // Test that it returns times from the API
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);

    // Test that fetchAPI was called
    expect(window.fetchAPI).toHaveBeenCalled();
  });

  test("updateTimes returns updated times based on selected date", () => {
    const initialState = ["17:00", "18:00"];
    const selectedDate = "2024-03-15";
    const action = { type: "UPDATE_TIMES", date: selectedDate };

    const result = updateTimes(initialState, action);

    // Test that it returns the new times from the API
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);

    // Test that fetchAPI was called with a Date object
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test("updateTimes returns same state for unknown action type", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };

    const result = updateTimes(initialState, action);

    // Test that it returns the same state for unknown actions
    expect(result).toEqual(initialState);
  });
});
