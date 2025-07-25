import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  const defaultProps = {
    title: "Click me",
    handleClick: jest.fn(),
  };

  it("renders the button with correct text", () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls handleClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} handleClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not render the icon when rightIcon prop is not provided", () => {
    render(<Button {...defaultProps} />);
    expect(screen.queryByAltText("arrow_left")).not.toBeInTheDocument();
  });
});
