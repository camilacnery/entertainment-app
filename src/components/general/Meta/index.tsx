import { FC } from "react";

type TMetaProps = {
  title: string;
  description: string;
};

const Meta: FC<TMetaProps> = ({ title, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Meta;
