import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginContainer from "../components/week_6/class_1/pages/auth/login/Login.container";

describe("Test login cmpnt", () => {
  it("Renders a form element", () => {
    const mockData = { email: "jaider@gmail.com", password: "jaider123" };

    const mockSetIsAuth = vi.fn();

    render(<LoginContainer setIsAuth={mockSetIsAuth} />)

    const inputEmail = screen.getByLabelText("Email");
    userEvent.clear(inputEmail);
    const inputPassword = screen.getByLabelText("Password");
    userEvent.clear(inputPassword);

    const button = screen.getByRole("button", {
      name: /submit/i
    })

    userEvent.type(inputEmail, mockData.email);
    userEvent.type(inputPassword, mockData.password);
    userEvent.click(button);
    mockSetIsAuth(mockData);

    expect(mockSetIsAuth).toBeCalled();
    expect(vi.isMockFunction(mockSetIsAuth)).toBe(true);

    expect(mockSetIsAuth.mock.calls[0]).toEqual([mockData])
  })
})