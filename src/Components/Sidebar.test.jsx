import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { MemoryRouter } from "react-router";

const props = { username: "Bret" };

describe("Testing Sidebar", () => {
  test("Sidebar render with loggedned user name", () => {
    render(
      <MemoryRouter>
        <Sidebar {...props} />
      </MemoryRouter>
    );
    const userName = screen.getByText(/Bret/i);
    expect(userName).toBeInTheDocument();
  });
});
