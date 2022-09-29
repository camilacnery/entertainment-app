import tmdbClient, { ITMDBMovieDetails } from "../../clients/tmdb";
import { IMovie } from "../../domain/Movie";
import { getMovieRecommendationRail } from "../rails";

const getMovie = async (id: string): Promise<IMovie> => {
  const movie = await tmdbClient.request<ITMDBMovieDetails>(`/movie/${id}`);

  const recommendations = await getMovieRecommendationRail(id);
  return {
    posterUrl: tmdbClient.buildImageUrl(movie.poster_path),
    backdropUrl: tmdbClient.buildImageUrl(movie.backdrop_path),
    title: movie.title,
    ...(movie.original_title && { originalTitle: movie.original_title }),
    ...(movie.release_date && { releaseDate: movie.release_date }),
    ...(movie.tagline && { tagline: movie.tagline }),
    ...(movie.runtime && { runtime: movie.runtime }),
    ...(movie.overview && { description: movie.overview }),
    genres: movie.genres?.map((genre) => genre.name) || [],
    recommendations: recommendations || [],
  };
};

export { getMovie };
