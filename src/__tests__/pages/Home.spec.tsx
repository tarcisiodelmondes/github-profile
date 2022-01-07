import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home", () => {
  it("should have a img", () => {
    render(<Home />);

    const img = screen.getByRole("img", { name: "Image of github" });

    expect(img).toBeInTheDocument();
    expect(img).toBeVisible();
    expect(img).toBeValid();
  });

  it("should have the component Search in the home page", () => {
    render(<Home />);

    const search = screen.getByRole("textbox", { name: "Search profile" });

    expect(search).toBeInTheDocument();
    expect(search).toBeVisible();
  });
});
