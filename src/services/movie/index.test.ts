import { buildApiMovieDetails, buildApiMovieRecommendations } from "@/tests/builders/api/movie";
import { rest, server } from "@/tests/server";
import { getMovie } from ".";

describe("Movie Service", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("returns movie in the application domain", async () => {
    server.use(
      rest.get("https://api.themoviedb.org/3/movie/:id", (_, res, ctx) => {
        return res(ctx.json(buildApiMovieDetails()));
      }),
      rest.get("https://api.themoviedb.org/3/movie/:id/recommendations", (_, res, ctx) => {
        return res(ctx.json(buildApiMovieRecommendations()));
      })
    );

    const movie = await getMovie("1");

    expect(movie).toStrictEqual({
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
      recommendations: [
        {
          id: 19404,
          posterUrl: "https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
          backdropUrl: "https://image.tmdb.org/t/p/original/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
          title: "Dilwale Dulhania Le Jayenge",
        },
        {
          id: 424,
          posterUrl: "https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
          backdropUrl: "https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
          title: "Schindler's List",
        },
        {
          id: 238,
          posterUrl: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          backdropUrl: "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
          title: "The Godfather",
        },
        {
          id: 680,
          posterUrl: "https://image.tmdb.org/t/p/original/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
          backdropUrl: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
          title: "Pulp Fiction",
        },
        {
          id: 13,
          posterUrl: "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
          backdropUrl: "https://image.tmdb.org/t/p/original/8uWbSjUky6NiJnD3Typz6ZN0f9w.jpg",
          title: "Forrest Gump",
        },
      ],
    });
  });
});
