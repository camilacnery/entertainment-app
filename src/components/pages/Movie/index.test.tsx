import { IMovie } from "@/domain/Movie";
import { buildMovie } from "@/tests/builders/domain/movie";
import { screen, render, within } from "@testing-library/react";

import Movie from ".";

const pageElements = {
  rail: {
    list: (name: string) => screen.queryByRole("list", { name }),
    items: (rail: HTMLElement) => within(rail).getAllByRole("listitem"),
  },
  movieDetails: {
    title: (name: string) => screen.getByRole("heading", { name }),
    releaseDate: (date: string) => screen.getByText(new RegExp(date)),
    genres: (genres: string) => screen.getByText(new RegExp(genres)),
    duration: (duration: string) => screen.getByText(new RegExp(duration)),
    tagline: (tagline: RegExp) => screen.getByText(tagline),
    description: (description: RegExp) => screen.getByText(description),
  },
};

const renderMovie = (movie: IMovie) => {
  return render(<Movie movie={movie} />);
};

describe("Movie", () => {
  it("renders movie details with all content", () => {
    const movie = buildMovie();
    const { baseElement } = renderMovie(movie);

    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    const recommendations = pageElements.rail.list("Recommendations")!;

    expect(baseElement).toMatchSnapshot();

    expect(pageElements.movieDetails.title("The Shawshank Redemption")).toBeInTheDocument();
    expect(pageElements.movieDetails.releaseDate("1994-09-23")).toBeInTheDocument();
    expect(pageElements.movieDetails.genres("Drama, Crime")).toBeInTheDocument();
    expect(pageElements.movieDetails.duration("142min")).toBeInTheDocument();
    expect(pageElements.movieDetails.tagline(/hope can set you free/i)).toBeInTheDocument();
    expect(pageElements.movieDetails.description(/framed in the 1940s/i)).toBeInTheDocument();
    expect(pageElements.rail.items(recommendations)).toHaveLength(5);
  });
});
