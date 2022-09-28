import { TRail } from "../../domain/Rail";
import tmdbClient from "../../clients/tmdb";

const movieMapper = (result: any) => ({
  posterUrl: tmdbClient.getImageUrl(result.poster_path),
  title: result.title || result.name || null,
  year: 2022,
});

const getHomeRails = async (): Promise<TRail[]> => {
  const trendingMovies = await tmdbClient.fetchRequest("/trending/all/week");

  return [
    {
      name: "Trending",
      type: "LANDSCAPE",
      items: trendingMovies.results.map(movieMapper),
    },
  ];
};

export { getHomeRails };
