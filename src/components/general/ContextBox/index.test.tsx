import { render } from "@testing-library/react";

import ContextBox from ".";

describe("ContextBox", () => {
  it("renders component", () => {
    const { baseElement } = render(
      <ContextBox>
        <div>Test</div>
      </ContextBox>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
