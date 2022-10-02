import { FC } from "react";
import { ErrorStatus } from "@/domain/Error";
import ContentBox from "@/components/general/ContextBox";
import Layout from "@/components/general/Layout";

type TProps = {
  status: ErrorStatus;
};

const messagesByStatus = {
  404: "Page not found!",
  500: "Oops, there was a problem!",
};

const ErrorPage: FC<TProps> = ({ status }) => (
  <Layout meta={{ title: "The Catalog | Error" }}>
    <ContentBox>
      <h1>{messagesByStatus[status]}</h1>
    </ContentBox>
  </Layout>
);

export default ErrorPage;
