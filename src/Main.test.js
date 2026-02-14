import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct expected value", () => {
  const result = initializeTimes();

  // Test that it returns an array
  expect(Array.isArray(result)).toBe(true);

  // Test that it contains expected times
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Test that it has the correct length
  expect(result).toHaveLength(6);
});

test("updateTimes returns the same state when given a date", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", date: "2024-03-15" };

  const result = updateTimes(initialState, action);

  // Test that it returns the same value provided in state
  expect(result).toEqual(initialState);
});

test("updateTimes returns the same state for unknown action type", () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: "UNKNOWN_ACTION" };

  const result = updateTimes(initialState, action);

  // Test that it returns the same state for unknown actions
  expect(result).toEqual(initialState);
});
