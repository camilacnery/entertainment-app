import { FC } from "react";
import Image from "next/future/image";
import { IMovie } from "@/domain/Movie";
import Rail from "@/components/general/Rail";
import Meta from "@/components/general/Meta";
import Banner from "@/components/general/Banner";
import styles from "./index.module.scss";

type TProps = {
  movie: IMovie;
};

const MoviePage: FC<TProps> = ({ movie }) => {
  return (
    <>
      <Banner imageUrl={movie.backdropUrl} />
      <main className={styles.main}>
        <Meta
          title={`The Catalog | ${movie.title}`}
          description={`Movie description - ${movie.description}`}
        />

        <div className={styles.content}>
          <div className={styles.movieContainer}>
            <Image loading="lazy" width={300} height={380} src={movie.posterUrl} alt={""} />
            <section className={styles.movieDetails}>
              <h1 className={styles.title}>{movie.title}</h1>
              <p>{`${movie.releaseDate} • ${movie.genres.join(", ")} • ${movie.runtime}min`}</p>
              <p>{movie.tagline}</p>
              <h2>Overview</h2>
              <p>{movie.description}</p>
            </section>
          </div>
          <Rail name="Similar movies" items={movie.recommendations} />
        </div>
      </main>
    </>
  );
};

export default MoviePage;
