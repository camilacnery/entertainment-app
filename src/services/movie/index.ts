import tmdbClient, { ITMDBMovieDetails } from "@/clients/tmdb";
import { IMovie } from "@/domain/Movie";
import { getMovieRecommendationRail } from "@/services/rails";

const getMovie = async (id: string): Promise<IMovie> => {
  try {
    const movie = await tmdbClient.request<ITMDBMovieDetails>(`/movie/${id}`);

    const recommendations = await getMovieRecommendationRail(id);
    const posterUrl = tmdbClient.buildImageUrl(movie.poster_path);
    const backdropUrl = tmdbClient.buildImageUrl(movie.backdrop_path);

    return {
      title: movie.title,
      ...(posterUrl && { posterUrl }),
      ...(backdropUrl && { backdropUrl }),
      ...(movie.original_title && { originalTitle: movie.original_title }),
      ...(movie.release_date && { releaseDate: movie.release_date }),
      ...(movie.tagline && { tagline: movie.tagline }),
      ...(movie.runtime && { runtime: movie.runtime }),
      ...(movie.overview && { description: movie.overview }),
      genres: movie.genres?.map((genre) => genre.name) || [],
      recommendations,
    };
  } catch (e) {
    console.log("[ERROR] Movie details", e);
    throw new Error("Error fetching movie details");
  }
};

export { getMovie };
