import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../../components/Search";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Search", () => {
  const urlMock = "http://localhost:3000";
  beforeAll(() => {
    window.history.pushState({}, "Mocked component", urlMock);
  });

  const createSut = () => render(<Search htmlFor="search-test" />);

  describe("Testing input element", () => {
    it("should have a 'input' element", () => {
      createSut();

      const input = screen.getByRole("textbox", { name: "Search profile" });

      expect(input).toBeInTheDocument();

      expect(input).toBeVisible();
    });

    it(`should have following properties in the input: "id", "placeholder", "type"
      and, if is required`, () => {
      createSut();

      const input = screen.getByRole("textbox", { name: "Search profile" });

      expect(input).toHaveProperty("placeholder", "Search profile");
      expect(input).toHaveProperty("type", "text");
      expect(input).toHaveProperty("id", "search-test");
      expect(input).toBeRequired();
    });

    it('should have a "tarcisiodelmondes" text in the input', () => {
      createSut();

      const input = screen.getByRole("textbox", {
        name: "Search profile",
      }) as HTMLInputElement;
      fireEvent.change(input, { target: { value: "tarcisiodelmondes" } });

      expect(input.value).toBe("tarcisiodelmondes");
    });
  });

  it("should have a svg", () => {
    createSut();

    const svg = screen.getByTestId("search-svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toBeVisible();
  });

  it(`should be redirected to the "/profile/tarcisiodelmondes/" page when
       clicking the button.`, async () => {
    const router = { push: jest.fn() };
    //@ts-ignore
    useRouter.mockReturnValue(router);
    createSut();

    const input = screen.getByRole("textbox", {
      name: "Search profile",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "tarcisiodelmondes" } });

    const button = screen.getByRole("button", { name: "Search" });
    fireEvent.click(button);

    expect(router.push).toHaveBeenCalled();
    expect(router.push).toHaveBeenCalledWith(`/profile/tarcisiodelmondes`);
  });
});
