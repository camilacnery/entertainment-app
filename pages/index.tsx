import type { NextPage } from "next";
import { getHomeRails } from "@/services/rails";
import HomePage from "@/components/pages/Home";
import { IRail } from "@/domain/Rail";

const Home: NextPage<{ homeRails: IRail[] }> = (props) => <HomePage {...props} />;

export async function getStaticProps() {
  const homeRails = await getHomeRails();

  return {
    props: {
      homeRails,
    },
    revalidate: 60,
  };
}

export default Home;
