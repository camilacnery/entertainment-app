import { FC, ReactNode } from "react";
import Head from "next/head";
import Banner from "@/components/general/Banner";
import styles from "./index.module.scss";

type TLayout = {
  meta: {
    title: string;
    description?: string;
  };
  children: ReactNode;
  backgroundUrl?: string;
};

const Layout: FC<TLayout> = ({ meta, backgroundUrl, children }) => {
  return (
    <>
      <Banner imageUrl={backgroundUrl} />
      <main className={styles.main}>
        <Head>
          <title>{meta.title}</title>
          {meta.description && <meta name="description" content={meta.description} />}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
