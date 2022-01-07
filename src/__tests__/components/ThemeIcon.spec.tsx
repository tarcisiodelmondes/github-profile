import { render, screen } from "@testing-library/react";
import { ThemeIcon } from "../../components/ThemeIcon";

describe("ThemeIcon", () => {
  const createSut = (theme?: string, toggleTheme?: () => void) => {
    render(<ThemeIcon theme={theme ?? "light"} toggleTheme={toggleTheme} />);
  };

  test("should have a icon in the container", () => {
    createSut();

    const container = screen.getByTestId("contain-icon");
    const svgImg = screen.getByTestId("sun");

    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
    expect(container).toContainElement(svgImg);
  });

  test("should have a 'moom' icon when the theme is dark ", () => {
    createSut("dark");

    const container = screen.getByTestId("contain-icon") as HTMLDivElement;

    const svgImg = screen.getByTestId("moon");
    expect(svgImg).toBeVisible();
    expect(container).toContainElement(svgImg);
  });
});
