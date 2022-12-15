import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills Component", () => {
  const skills = ["javascript", "git", "tailwind"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list items", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startButton).not.toBeInTheDocument();
  });
});
