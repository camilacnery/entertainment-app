import { buildApiMovieDetails } from "@/tests/builders/api/movie";
import tmdbClient, { ITMDBMovieDetails } from ".";

const mockFetch = jest.fn();
window.fetch = mockFetch;

describe("TMDB Client", () => {
  afterEach(() => jest.clearAllMocks);

  const mockSuccessResponse = buildApiMovieDetails();
  describe("request", () => {
    it("returns successfull response for request without params", async () => {
      mockFetch.mockResolvedValue({ json: () => mockSuccessResponse });

      const response = await tmdbClient.request<ITMDBMovieDetails>("/movie/1");

      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/movie/1?api_key=api-key"
      );
      expect(response).toStrictEqual(mockSuccessResponse);
    });

    it("returns successfull response for request with params", async () => {
      mockFetch.mockResolvedValue({ json: () => mockSuccessResponse });

      const response = await tmdbClient.request<ITMDBMovieDetails>("/movie/1", {
        with_genres: "28",
      });

      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/movie/1?api_key=api-key&with_genres=28"
      );
      expect(response).toStrictEqual(mockSuccessResponse);
    });

    it("throws error when there is a error executing the request", async () => {
      const expectedError = new Error("Request error");
      mockFetch.mockRejectedValue(expectedError);

      try {
        await tmdbClient.request<ITMDBMovieDetails>("/movie/1");
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it("throws error when there is an error in the request response", async () => {
      const errorMessage = "Error fetching data";
      mockFetch.mockResolvedValue({
        json: () => ({ success: false, status_message: errorMessage }),
      });

      try {
        await tmdbClient.request<ITMDBMovieDetails>("/movie/1");
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage));
      }
    });

    it("throws error when api key is not present", async () => {
      delete process.env.TMDB_KEY;

      try {
        await tmdbClient.request<ITMDBMovieDetails>("/movie/1");
      } catch (error) {
        expect(error).toEqual(new Error("Missing API Key"));
      }

      process.env.TMDB_KEY = "api-key";
    });
  });

  describe("buildImageUrl", () => {
    it("returns full image URL", () => {
      const imageUrl = tmdbClient.buildImageUrl("/image/path");

      expect(imageUrl).toEqual("https://image.tmdb.org/t/p/original/image/path");
    });
  });
});
