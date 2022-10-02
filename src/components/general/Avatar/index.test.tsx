import { render } from "@testing-library/react";

import Avatar from ".";

describe("Avatar", () => {
  it("renders component", () => {
    const { baseElement } = render(<Avatar imageUrl="https://image.url" />);

    expect(baseElement).toMatchSnapshot();
  });
});
