import { render, screen } from "@testing-library/react";
import { Loading } from "../../components/Loading";

describe("Loading", () => {
  it("should show loading component", () => {
    render(<Loading isLoading={true} />);

    const loading = screen.getByTestId("loading");

    expect(loading).toBeInTheDocument();
    expect(loading).toBeValid();
    expect(loading).not.toBeEmptyDOMElement();
    expect(loading).toBeVisible();
  });

  it("should not show loading component", () => {
    render(<Loading isLoading={false} />);

    const loading = screen.queryByTestId("loading");

    expect(loading).not.toBeInTheDocument();
  });
});
