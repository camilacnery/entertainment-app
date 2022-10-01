import { UserContext } from "@/contexts/User";
import { render } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("renders component", () => {
    const { baseElement } = render(
      <UserContext.Provider value={{ onSuccessLogin: jest.fn(), onLogout: jest.fn() }}>
        <Header />
      </UserContext.Provider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
