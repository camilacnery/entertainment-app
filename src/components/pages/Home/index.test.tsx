import { screen, render, within } from "@testing-library/react";
import Home from "../../../../pages";
import { IRail } from "../../../domain/Rail";
import { buildRail } from "../../../tests/builders/rails";

const pageElements = {
  rail: (name: string) => screen.queryByRole("list", { name }),
  railItems: (rail: HTMLElement) => within(rail).getAllByRole("listitem"),
  railMovie: (rail: HTMLElement, movieName: string) =>
    within(rail).queryByRole("img", {
      name: movieName,
    }),
};

const renderHome = (rails: IRail[]) => {
  return render(<Home homeRails={rails} />);
};

describe("Home", () => {
  it("renders home with multiple rails", () => {
    const rails = [
      buildRail({ name: "Trending", size: 2 }),
      buildRail({ name: "Top Rated", size: 3 }),
    ];

    renderHome(rails);

    const trendingRail = pageElements.rail("Trending")!;
    expect(pageElements.railItems(trendingRail)).toHaveLength(2);
    expect(pageElements.railMovie(trendingRail, "First Movie")).toBeInTheDocument();
    expect(pageElements.railMovie(trendingRail, "Second Movie")).toBeInTheDocument();

    const topRatedRail = pageElements.rail("Top Rated")!;
    expect(pageElements.railItems(topRatedRail)).toHaveLength(3);
    expect(pageElements.railMovie(topRatedRail, "First Movie")).toBeInTheDocument();
    expect(pageElements.railMovie(topRatedRail, "Second Movie")).toBeInTheDocument();
    expect(pageElements.railMovie(topRatedRail, "Third Movie")).toBeInTheDocument();
  });

  it("does not render rails with empty items", () => {
    const rails = [
      buildRail({ name: "Trending", size: 0 }),
      buildRail({ name: "Top Rated", size: 3 }),
    ];

    renderHome(rails);

    expect(pageElements.rail("Trending")).not.toBeInTheDocument();
    expect(pageElements.rail("Top Rated")).toBeInTheDocument();
  });
});
