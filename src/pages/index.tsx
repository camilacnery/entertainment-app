import type { NextPage } from "next";
import { getHomeRails } from "@/services/rails";
import HomePage from "@/components/pages/Home";
import { IRail } from "@/domain/Rail";
import { ErrorStatus } from "@/domain/Error";
import ErrorPage from "@/components/pages/Error";

const Home: NextPage<{ homeRails: IRail[]; errorStatus: ErrorStatus }> = (props) => {
  if (props.errorStatus) return <ErrorPage status={props.errorStatus} />;

  return <HomePage {...props} />;
};

export const getStaticProps = async () => {
  try {
    const homeRails = await getHomeRails();

    return {
      props: { homeRails },
      revalidate: 60,
    };
  } catch {
    return {
      props: { errorStatus: 500, revalidate: 60 },
    };
  }
};

export default Home;
