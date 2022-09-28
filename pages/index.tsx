import type { NextPage } from "next";
import { getHomeRails } from "../src/api/services/home";
import HomePage from "../src/app/pages/Home";
import { TRail } from "../src/domain/Rail";

const Home: NextPage<{ homeRails: TRail[] }> = (props) => (
  <HomePage {...props} />
);

export async function getStaticProps() {
  const homeRails = await getHomeRails();

  return {
    props: {
      homeRails,
    },
  };
}

export default Home;
