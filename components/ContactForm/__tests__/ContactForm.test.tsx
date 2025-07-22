import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../ContactForm";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is too short/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
      expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/message should be more detailed/i)
      ).toBeInTheDocument();
    });
  });

  it("submits the form successfully", async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 200 });

    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/name/i), "Katya");
    await userEvent.type(screen.getByLabelText(/email/i), "katya@example.com");
    await userEvent.type(screen.getByLabelText(/subject/i), "Hello");
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a test message"
    );

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/your message has been sent/i)
      ).toBeInTheDocument()
    );

    expect(mockedAxios.post).toHaveBeenCalledWith(
      expect.any(String),
      {
        name: "Katya",
        email: "katya@example.com",
        subject: "Hello",
        message: "This is a test message",
      },
      expect.any(Object)
    );
  });
});
