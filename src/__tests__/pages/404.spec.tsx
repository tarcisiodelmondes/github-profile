import { render, screen } from "@testing-library/react";
import Page404 from "../../pages/profile/404";

describe("Page 404", () => {
  it("should have a heading", () => {
    render(<Page404 />);

    const heading = screen.getByRole("heading", { name: "User not found" });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
    expect(heading).toBeValid();
  });

  it("should have a paragraph", () => {
    render(<Page404 />);

    const paragraph = screen.getByText(
      "Sorry, check if you typed the user correctly"
    );

    expect(paragraph).toHaveTextContent(
      "Sorry, check if you typed the user correctly"
    );
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
    expect(paragraph).toBeValid();
  });

  it("should have a img", () => {
    render(<Page404 />);

    const paragraph = screen.getByRole("img");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
    expect(paragraph).toBeValid();
  });
});
