import { IMovie } from "@/domain/Movie";
import { buildMovie } from "@/tests/builders/movie";
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
    tagline: (tagline: string) => screen.getByText(tagline),
    description: (description: string) => screen.getByText(description),
  },
};

const renderMovie = (movie: IMovie) => {
  return render(<Movie movie={movie} />);
};

describe("Movie", () => {
  it("renders movie details with all content", () => {
    const movie = buildMovie();
    const { baseElement } = renderMovie(movie);

    const recommendations = pageElements.rail.list("Similar movies")!;

    expect(baseElement).toMatchSnapshot();

    expect(pageElements.movieDetails.title("Movie Title")).toBeInTheDocument();
    expect(pageElements.movieDetails.releaseDate("2022-09-16")).toBeInTheDocument();
    expect(pageElements.movieDetails.genres("Action, Drama")).toBeInTheDocument();
    expect(pageElements.movieDetails.duration("167min")).toBeInTheDocument();
    expect(pageElements.movieDetails.tagline("Movie tagline")).toBeInTheDocument();
    expect(pageElements.movieDetails.tagline("Movie description")).toBeInTheDocument();
    expect(pageElements.rail.items(recommendations)).toHaveLength(4);
  });
});
