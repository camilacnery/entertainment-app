import { screen, render } from "@testing-library/react";
import { ErrorStatus } from "@/domain/Error";
import ErrorPage from ".";

const pageElements = {
  errorMessage: (name: string) => screen.getByRole("heading", { name }),
};

const renderError = (status: ErrorStatus) => {
  return render(<ErrorPage status={status} />);
};

type TScenario = [ErrorStatus, string];

describe("Error Page", () => {
  const scenarios: TScenario[] = [
    [404, "Page not found!"],
    [500, "Oops, there was a problem!"],
  ];

  test.each<TScenario>(scenarios)(
    "when error is %p show '%p' message",
    (firstArg, expectedResult) => {
      renderError(firstArg);

      expect(pageElements.errorMessage(expectedResult)).toBeInTheDocument();
    }
  );
});
