import { render, screen } from "@testing-library/react";
import { TUserContext, UserContext } from "@/contexts/User";

import Header from ".";
import userEvent from "@testing-library/user-event";

const mockedRouterPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockedRouterPush,
  }),
}));

const componentElements = {
  loginButton: () => screen.getByRole("button", { name: "Login" }),
};

const renderHeader = (props: Partial<TUserContext> = {}) => {
  return render(
    <UserContext.Provider value={{ onSuccessLogin: jest.fn(), onLogout: jest.fn(), ...props }}>
      <Header />
    </UserContext.Provider>
  );
};

describe("Header", () => {
  it("renders component when user is logged out", () => {
    const { baseElement } = renderHeader();

    expect(baseElement).toMatchSnapshot();
  });

  it("renders component when user is logged in", () => {
    const { baseElement } = renderHeader({
      profile: {
        firstName: "Test",
        fullName: "Test User",
        email: "test@test.com",
        imageUrl: "https://image.url",
      },
    });

    expect(baseElement).toMatchSnapshot();
  });

  it("redirects to login page when login button is clicked", async () => {
    renderHeader();

    await userEvent.click(componentElements.loginButton());

    expect(mockedRouterPush).toHaveBeenCalledWith("/login");
  });
});
