import { fireEvent, render, screen } from "@testing-library/react";
import { SearchMobile } from "../../components/Search/searchMobile";

describe("SearchMobile", () => {
  const createSut = (theme?: string, toggleTheme?: () => void) => {
    render(<SearchMobile theme={theme ?? "light"} toggleTheme={toggleTheme} />);
  };

  it("should have a checkbox type input", () => {
    createSut();

    const input = screen.getByRole("checkbox");

    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();
    expect(input).toBeValid();
    expect(input).not.toBeChecked();
  });

  it("should be checked after clicking on the label", () => {
    createSut();

    const input = screen.getByRole("checkbox");
    const label = screen.getByTestId("open-menu");
    fireEvent.click(label);

    expect(label).toBeValid();
    expect(input).toBeChecked();
  });

  it("should not be checked after clicking on the label", () => {
    createSut();

    const input = screen.getByRole("checkbox");
    const labelOpen = screen.getByTestId("open-menu");
    fireEvent.click(labelOpen);

    const labelClose = screen.getByTestId("close-menu");

    expect(input).toBeChecked();

    fireEvent.click(labelClose);
    expect(input).not.toBeChecked();
  });

  it("should have a component ThemeIcon in container", () => {
    createSut();

    const container = screen.getByTestId("contain-theme_icon");
    const icon = screen.getByTestId("sun");

    expect(container).toBeInTheDocument();
    expect(container).toBeValid();
    expect(container).toContainElement(icon);
  });

  it("should have a component Search in container", () => {
    createSut();

    const nav = screen.getByRole("navigation");
    const search = screen.getByRole("textbox", { name: "Search profile" });

    expect(nav).toBeInTheDocument();
    expect(nav).toBeValid();
    expect(nav).toContainElement(search);
  });
});
