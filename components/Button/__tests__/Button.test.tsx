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

  it("disables the button when isDisabled is true", () => {
    render(<Button {...defaultProps} isDisabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders the right icon when rightIcon prop is provided", () => {
    const iconUrl = "/path/to/icon.png";
    render(<Button {...defaultProps} rightIcon={iconUrl} />);
    const iconImg = screen.getByAltText("arrow_left");
    expect(iconImg).toBeInTheDocument();
    expect(iconImg.closest("div")).toHaveClass("relative w-6 h-6");
  });

  it("does not render the icon when rightIcon prop is not provided", () => {
    render(<Button {...defaultProps} />);
    expect(screen.queryByAltText("arrow_left")).not.toBeInTheDocument();
  });
});
