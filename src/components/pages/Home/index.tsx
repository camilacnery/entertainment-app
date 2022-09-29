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
    <main className={styles.main}>
      <Meta
        title="Movie catalog"
        description="List of movies, movie details, and more"
      />

      {homeRails.map((rail) => (
        <Rail key={`rail-${rail.name}`} {...rail} />
      ))}
    </main>
  );
};

export default HomePage;
