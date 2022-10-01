import { buildApiMovieDetails } from "@/tests/builders/api/movie";
import { buildApiMoviesList } from "@/tests/builders/api/rails";
import { buildRailItems } from "@/tests/builders/domain/rails";
import { mockSuccessResponse, server } from "@/tests/server";
import { getMovie } from ".";

const MOVIE_URL = "https://api.themoviedb.org/3/movie/:id";
const RECOMMENDATIONS_URL = "https://api.themoviedb.org/3/movie/:id/recommendations";

describe("Movie Service", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const expectedMovie = {
    posterUrl: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    title: "The Shawshank Redemption",
    originalTitle: "The Shawshank Redemption",
    releaseDate: "1994-09-23",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    runtime: 142,
    description:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    genres: ["Drama", "Crime"],
    recommendations: buildRailItems({ size: 5 }),
  };
  it("returns movie in the application domain", async () => {
    server.use(
      mockSuccessResponse(MOVIE_URL, buildApiMovieDetails()),
      mockSuccessResponse(RECOMMENDATIONS_URL, buildApiMoviesList())
    );

    const movie = await getMovie("1");

    expect(movie).toStrictEqual(expectedMovie);
  });

  it("returns movie without genres", async () => {
    server.use(
      mockSuccessResponse(MOVIE_URL, buildApiMovieDetails({ genres: undefined })),
      mockSuccessResponse(RECOMMENDATIONS_URL, buildApiMoviesList())
    );

    const movie = await getMovie("1");

    expect(movie).toStrictEqual({
      ...expectedMovie,
      genres: [],
    });
  });
});
