import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users", () => {
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
