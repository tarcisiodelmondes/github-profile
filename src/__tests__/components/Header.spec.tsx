import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Header", () => {
  const urlMock = "http://localhost:3000";
  beforeAll(() => {
    window.history.pushState({}, "Mocked component", urlMock);
  });

  const createSut = () => {
    render(<Header theme={"light"} toggleTheme={() => {}} />);
  };

  it("should have a header element", () => {
    createSut();

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should have a 'h1' with an 'a' element", () => {
    createSut();

    const aElement = screen.getByRole("link", { name: "Github Profile" });
    const h1Element = screen.getByRole("heading");

    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toContainElement(aElement);
  });

  it("should have a logo", () => {
    createSut();

    const link = screen.getByRole("link", { name: "Github Profile" });
    expect(link).toBeInTheDocument();
  });

  it("should have a link with href '/'", () => {
    createSut();

    const link = screen.getByRole("link", { name: "Github Profile" });
    expect(link).toHaveProperty("href", `${urlMock}/`);
  });

  it("should have a svg", () => {
    createSut();

    const allSvg = screen.getAllByTestId("sun");
    allSvg.forEach((svg) => expect(svg).toBeInTheDocument());
  });

  it("should have two inputs", () => {
    createSut();

    const labels = screen.getAllByRole("textbox", {
      name: "Search profile",
    });

    labels.forEach((label) => expect(label).toBeInTheDocument());
    expect(labels.length).toEqual(2);
  });
});
