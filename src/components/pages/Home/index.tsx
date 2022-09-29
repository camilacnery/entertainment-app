import { FC } from "react";
import { IRail } from "../../../domain/Rail";
import Banner from "../../general/Banner";
import Meta from "../../general/Meta";
import Rail from "../../general/Rail";
import styles from "./index.module.scss";

type TProps = {
  homeRails: IRail[];
};

const HomePage: FC<TProps> = ({ homeRails }) => {
  const bannerUrl = homeRails[0].items[0].backdropUrl;

  console.log(homeRails[0].items[0]);
  return (
    <>
      {bannerUrl && <Banner imageUrl={bannerUrl} />}
      <main className={styles.main}>
        <Meta
          title="Movie catalog"
          description="List of movies, movie details, and more"
        />

        <div className={styles.rails}>
          {homeRails.map((rail) => (
            <Rail key={`rail-${rail.name}`} {...rail} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
