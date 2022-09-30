import { screen, render, within } from "@testing-library/react";
import { IRail } from "@/domain/Rail";
import { buildRail } from "@/tests/builders/rails";
import Home from ".";

const pageElements = {
  rail: {
    list: (name: string) => screen.queryByRole("list", { name }),
    items: (rail: HTMLElement) => within(rail).getAllByRole("listitem"),
    movie: (rail: HTMLElement, movieName: string) =>
      within(rail).queryByRole("img", {
        name: movieName,
      }),
  },
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

    const { baseElement } = renderHome(rails);

    expect(baseElement).toMatchSnapshot();

    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    const trendingRail = pageElements.rail.list("Trending")!;
    expect(pageElements.rail.items(trendingRail)).toHaveLength(2);
    expect(pageElements.rail.movie(trendingRail, "First Movie")).toBeInTheDocument();
    expect(pageElements.rail.movie(trendingRail, "Second Movie")).toBeInTheDocument();

    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    const topRatedRail = pageElements.rail.list("Top Rated")!;
    expect(pageElements.rail.items(topRatedRail)).toHaveLength(3);
    expect(pageElements.rail.movie(topRatedRail, "First Movie")).toBeInTheDocument();
    expect(pageElements.rail.movie(topRatedRail, "Second Movie")).toBeInTheDocument();
    expect(pageElements.rail.movie(topRatedRail, "Third Movie")).toBeInTheDocument();
  });

  it("does not render rails with empty items", () => {
    const rails = [
      buildRail({ name: "Trending", size: 0 }),
      buildRail({ name: "Top Rated", size: 3 }),
    ];

    renderHome(rails);

    expect(pageElements.rail.list("Trending")).not.toBeInTheDocument();
    expect(pageElements.rail.list("Top Rated")).toBeInTheDocument();
  });
});
