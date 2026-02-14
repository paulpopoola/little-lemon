import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("renders welcome heading", () => {
  render(<Main />);

  const headingElement = screen.getByText(/welcome to little lemon/i);
  expect(headingElement).toBeInTheDocument();
});
