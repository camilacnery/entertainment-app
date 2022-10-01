import { render } from "@testing-library/react";

import Banner from ".";

describe("Banner", () => {
  it("renders component", () => {
    const { baseElement } = render(<Banner imageUrl="https://image.url" />);

    expect(baseElement).toMatchSnapshot();
  });
});
