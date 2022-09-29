import { TRail } from "../../domain/Rail";
import tmdbClient from "../../clients/tmdb";

const movieMapper = (result: any) => ({
  posterUrl: tmdbClient.getImageUrl(result.poster_path),
  title: result.title || result.name || null,
  year: 2022,
});

const rails = [
  { name: "Trending", path: "/trending/all/week" },
  { name: "Top Rated", path: "/movie/top_rated" },
  { name: "Action", path: "/discover/movie", filter: "with_genres=28" },
  { name: "Comedy", path: "/discover/movie", filter: "with_genres=35" },
  { name: "Drama", path: "/discover/movie", filter: "with_genres=18" },
];

const getHomeRails = async (): Promise<TRail[]> => {
  let homeRails: TRail[] = [];

  for (const rail of rails) {
    const contentList = await tmdbClient.request(rail.path, rail.filter);

    if (contentList.results?.length) {
      homeRails.push({
        name: rail.name,
        type: "POSTER",
        items: contentList.results.map(movieMapper),
      });
    }
  }

  return homeRails;
};

export { getHomeRails };
