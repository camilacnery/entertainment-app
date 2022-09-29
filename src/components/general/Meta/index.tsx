import Head from "next/head";
import { FC } from "react";

type TMetaProps = {
  title: string;
  description: string;
};

const Meta: FC<TMetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
