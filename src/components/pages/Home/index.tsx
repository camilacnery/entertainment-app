import Head from "next/head";
import { FC } from "react";
import { IRail } from "../../../domain/Rail";
import Meta from "../../general/Meta";
import Rail from "../../general/Rail";
import styles from "./index.module.scss";

type TProps = {
  homeRails: IRail[];
};

const HomePage: FC<TProps> = ({ homeRails }) => {
  return (
    <div className={styles.container}>
      <Head>
        <Meta
          title="Movie catalog"
          description="List of movies, movie details, and more"
        ></Meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Movie catalog</h1>

        {homeRails.map((rail) => (
          <Rail key={`rail-${rail.name}`} {...rail} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
