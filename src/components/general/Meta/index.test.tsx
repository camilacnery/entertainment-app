import { render } from "@testing-library/react";

import Meta from ".";

describe("Header", () => {
  it("renders component", () => {
    const { baseElement } = render(<Meta title="Title" description="Description" />);

    expect(baseElement).toMatchSnapshot();
  });
});
