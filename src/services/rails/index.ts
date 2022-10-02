import { IRail, IRailItem } from "@/domain/Rail";
import tmdbClient, { ITMDBList } from "@/clients/tmdb";

const buildRailItem = (result: ITMDBList["results"][0]) => ({
  id: result.id,
  posterUrl: tmdbClient.buildImageUrl(result.poster_path),
  backdropUrl: tmdbClient.buildImageUrl(result.backdrop_path),
  title: result.name || result.title,
});

const getHomeRails = async (): Promise<IRail[]> => {
  const rails = [
    { name: "Trending", path: "/trending/movie/week" },
    { name: "Top Rated", path: "/movie/top_rated" },
    { name: "Action", path: "/discover/movie", params: { with_genres: "28" } },
    { name: "Comedy", path: "/discover/movie", params: { with_genres: "35" } },
    { name: "Drama", path: "/discover/movie", params: { with_genres: "18" } },
  ];

  const homeRails: IRail[] = [];

  for (const rail of rails) {
    try {
      const contentList = await tmdbClient.request<ITMDBList>(rail.path, rail.params);

      if (contentList.results?.length) {
        homeRails.push({
          name: rail.name,
          items: contentList.results.map(buildRailItem),
        });
      }
    } catch (e) {
      console.log("[ERROR] Home rails", e);
    }
  }

  if (!homeRails.length) {
    throw new Error("Error fetching home rails");
  }

  return homeRails;
};

const getMovieRecommendationRail = async (movieId: string): Promise<IRailItem[]> => {
  try {
    const rail = await tmdbClient.request<ITMDBList>(`/movie/${movieId}/recommendations`);
    return rail.results?.map(buildRailItem) || [];
  } catch (e) {
    console.log("[ERROR] Movie recommendations", e);
    return [];
  }
};

export { getHomeRails, getMovieRecommendationRail };
