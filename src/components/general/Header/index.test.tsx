import { render } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("renders component", () => {
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
