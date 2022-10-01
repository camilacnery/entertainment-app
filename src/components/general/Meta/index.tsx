import { FC } from "react";
import Head from "next/head";

type TMetaProps = {
  title: string;
  description?: string;
};

const Meta: FC<TMetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
