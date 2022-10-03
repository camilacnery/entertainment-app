import { UserContextProvider } from "@/contexts/User";
import { render, screen } from "@testing-library/react";
import { CredentialResponse, GoogleLoginProps } from "@react-oauth/google";
import userEvent from "@testing-library/user-event";
import LoginPage from ".";

const mockedRouterPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockedRouterPush,
  }),
}));

jest.mock("@react-oauth/google", () => {
  const GoogleAuth = jest.requireActual("@react-oauth/google");

  const credentialsResponse: CredentialResponse = {
    credential:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFbnRlcnRhaW5tZW50IEFwcCIsImlhdCI6MTY2NDc0MzE3MCwiZXhwIjoxNjk2Mjc5MTcwLCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiYXpwIjoiaGphc29pa2pscWpubGsiLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJmYW1pbHlfbmFtZSI6IlRlc3QiLCJnaXZlbl9uYW1lIjoiVXNlciIsImp0aSI6Impsa2phbHNqZGxhamRsYWoiLCJuYW1lIjoiVGVzdCBVc2VyIiwibmJmIjoiamxja3NhamxkamFzbGQiLCJwaWN0dXJlIjoiaHR0cHM6Ly90ZXN0LnBpY3R1cmUifQ.DHRCtB-XkEcNaULDVjLq_ZHV28ocAYVtHmQLKYBAhmI",
  };

  const GoogleLogin = ({ onSuccess }: GoogleLoginProps) => (
    <button onClick={() => onSuccess(credentialsResponse)}>Mock login</button>
  );
  return { ...GoogleAuth, GoogleLogin };
});

const pageElements = {
  loggedInMessage: () => screen.getByRole("heading", { name: "You are logged in, redirecting..." }),
  mockLoginButton: () => screen.getByRole("button", { name: "Mock login" }),
};

const renderLogin = () => {
  return render(
    <UserContextProvider>
      <LoginPage />
    </UserContextProvider>
  );
};

describe("Login Page", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders login page", async () => {
    const { baseElement } = renderLogin();

    expect(baseElement).toMatchSnapshot();

    await userEvent.click(pageElements.mockLoginButton());
    expect(pageElements.loggedInMessage()).toBeInTheDocument();
    expect(mockedRouterPush).toHaveBeenCalledWith("/");
  });
});
