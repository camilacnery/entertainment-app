import { FC } from "react";
import { IRail } from "@/domain/Rail";
import Rail from "@/components/general/Rail";
import Layout from "@/components/general/Layout";

type TProps = {
  homeRails: IRail[];
};

const HomePage: FC<TProps> = ({ homeRails }) => {
  const backgroundUrl = homeRails[0]?.items[0]?.backdropUrl;

  return (
    <Layout
      meta={{ title: "The Catalog", description: "List of movies, movie details, and more" }}
      backgroundUrl={backgroundUrl}
    >
      {homeRails.map((rail) => (
        <Rail key={`rail-${rail.name}`} {...rail} />
      ))}
    </Layout>
  );
};

export default HomePage;
