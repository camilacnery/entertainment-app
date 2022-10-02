import { UserContextProvider } from "@/contexts/User";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfilePage from ".";

const mockedRouterPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockedRouterPush,
  }),
}));

const pageElements = {
  loggedOutError: () =>
    screen.getByRole("heading", {
      name: /you need to be logged in to view this page, redirecting\.\.\./i,
    }),
  logoutButton: () => screen.getByRole("button", { name: /logout/i }),
  profile: {
    name: (name: string) => screen.getByRole("heading", { name }),
    email: (email: string) => screen.getByText(email),
  },
};

const userJwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFbnRlcnRhaW5tZW50IEFwcCIsImlhdCI6MTY2NDc0MzE3MCwiZXhwIjoxNjk2Mjc5MTcwLCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiYXpwIjoiaGphc29pa2pscWpubGsiLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJmYW1pbHlfbmFtZSI6IlRlc3QiLCJnaXZlbl9uYW1lIjoiVXNlciIsImp0aSI6Impsa2phbHNqZGxhamRsYWoiLCJuYW1lIjoiVGVzdCBVc2VyIiwibmJmIjoiamxja3NhamxkamFzbGQiLCJwaWN0dXJlIjoiaHR0cHM6Ly90ZXN0LnBpY3R1cmUifQ.DHRCtB-XkEcNaULDVjLq_ZHV28ocAYVtHmQLKYBAhmI";

const renderProfile = () => {
  return render(
    <UserContextProvider>
      <ProfilePage />
    </UserContextProvider>
  );
};

describe("Profile Page", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders profile details", () => {
    window.localStorage.setItem("app/user-token", userJwt);
    const { baseElement } = renderProfile();

    expect(baseElement).toMatchSnapshot();
    expect(pageElements.profile.name("Test User")).toBeInTheDocument();
    expect(pageElements.profile.email("test@example.com")).toBeInTheDocument();
  });

  it("clears user data and logout when logout button is clicked", async () => {
    window.localStorage.setItem("app/user-token", userJwt);
    renderProfile();

    await userEvent.click(pageElements.logoutButton());

    expect(window.localStorage.getItem("app/user-token")).toBeNull();
    expect(pageElements.loggedOutError()).toBeInTheDocument();
    expect(mockedRouterPush).toHaveBeenCalledWith("/");
  });

  it("redirects to home when user is not logged in", () => {
    renderProfile();

    expect(pageElements.loggedOutError()).toBeInTheDocument();
    expect(mockedRouterPush).toHaveBeenCalledWith("/");
  });
});
