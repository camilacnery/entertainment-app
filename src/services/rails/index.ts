import { IRail, IRailItem } from "../../domain/Rail";
import tmdbClient from "../../clients/tmdb";

const itemMapper = (result: any) => ({
  id: result.id,
  posterUrl: tmdbClient.getImageUrl(result.poster_path),
  title: result.title || result.name || null,
});

const getHomeRails = async (): Promise<IRail[]> => {
  const rails = [
    { name: "Trending", path: "/trending/movie/week" },
    { name: "Top Rated", path: "/movie/top_rated" },
    { name: "Action", path: "/discover/movie", filter: "with_genres=28" },
    { name: "Comedy", path: "/discover/movie", filter: "with_genres=35" },
    { name: "Drama", path: "/discover/movie", filter: "with_genres=18" },
  ];

  let homeRails: IRail[] = [];

  for (const rail of rails) {
    const contentList = await tmdbClient.request(rail.path, rail.filter);

    if (contentList.results?.length) {
      homeRails.push({
        name: rail.name,
        items: contentList.results.map(itemMapper),
      });
    }
  }

  return homeRails;
};

const getMovieRecommendationRail = async (
  movieId: string
): Promise<IRailItem[]> => {
  const rail = await tmdbClient.request(`/movie/${movieId}/recommendations`);

  return rail.results?.map(itemMapper);
};

export { getHomeRails, getMovieRecommendationRail };
