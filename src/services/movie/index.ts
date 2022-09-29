import tmdbClient from "../../clients/tmdb";
import { TMovie } from "../../domain/Movie";
import { getMovieRecommendationRail } from "../rails";

const getMovie = async (id: string): Promise<TMovie> => {
  const movie = await tmdbClient.request(`/movie/${id}`);
  const recommendations = await getMovieRecommendationRail(id);
  return {
    posterUrl: tmdbClient.getImageUrl(movie.poster_path),
    backdropUrl: tmdbClient.getImageUrl(movie.backdrop_path),
    title: movie.title || movie.name || null,
    originalTitle: movie.original_title || null,
    releaseDate: movie.release_date || null,
    tagline: movie.tagline || null,
    description: movie.overview || null,
    genres: movie.genres?.map((genre: any) => genre.name) || [],
    recommendations,
  };
};

export { getMovie };
