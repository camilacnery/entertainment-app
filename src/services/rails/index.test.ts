import { buildApiMoviesList } from "@/tests/builders/api/rails";
import { buildRailItems } from "@/tests/builders/domain/rails";
import { server, mockSuccessResponse } from "@/tests/server";
import { getHomeRails, getMovieRecommendationRail } from ".";

const TRENDING_URL = "https://api.themoviedb.org/3/trending/movie/week";
const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated";
const DISCOVER_URL = "https://api.themoviedb.org/3/discover/movie";
const RECOMMENDATIONS_URL = "https://api.themoviedb.org/3/movie/:id/recommendations";

describe("Rail Service", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const expectedMoviesList = buildRailItems({ size: 5 });

  describe("getHomeRails", () => {
    it("returns all home rails in the application domain", async () => {
      server.use(
        mockSuccessResponse(TRENDING_URL, buildApiMoviesList()),
        mockSuccessResponse(TOP_RATED_URL, buildApiMoviesList()),
        mockSuccessResponse(DISCOVER_URL, buildApiMoviesList())
      );

      const homeRails = await getHomeRails();

      expect(homeRails).toStrictEqual([
        {
          name: "Trending",
          items: expectedMoviesList,
        },
        {
          name: "Top Rated",
          items: expectedMoviesList,
        },
        {
          name: "Action",
          items: expectedMoviesList,
        },
        {
          name: "Comedy",
          items: expectedMoviesList,
        },
        {
          name: "Drama",
          items: expectedMoviesList,
        },
      ]);
    });

    it("does not add rail when items list is not present", async () => {
      server.use(
        mockSuccessResponse(TRENDING_URL, buildApiMoviesList()),
        mockSuccessResponse(TOP_RATED_URL, buildApiMoviesList()),
        mockSuccessResponse(DISCOVER_URL, buildApiMoviesList({ results: undefined }))
      );

      const homeRails = await getHomeRails();

      expect(homeRails).toStrictEqual([
        {
          name: "Trending",
          items: expectedMoviesList,
        },
        {
          name: "Top Rated",
          items: expectedMoviesList,
        },
      ]);
    });
  });

  describe("getMovieRecommendationRail", () => {
    it("returns movie list in the application domain", async () => {
      server.use(mockSuccessResponse(RECOMMENDATIONS_URL, buildApiMoviesList()));

      const movieRecommendations = await getMovieRecommendationRail("1");

      expect(movieRecommendations).toStrictEqual(expectedMoviesList);
    });

    it("returns empty list when items list is not present", async () => {
      server.use(
        mockSuccessResponse(RECOMMENDATIONS_URL, buildApiMoviesList({ results: undefined }))
      );

      const movieRecommendations = await getMovieRecommendationRail("1");

      expect(movieRecommendations).toStrictEqual([]);
    });
  });
});
