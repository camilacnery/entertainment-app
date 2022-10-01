import { FC, useEffect } from "react";
import Meta from "@/components/general/Meta";
import styles from "./index.module.scss";
import { useUserContext } from "@/contexts/User";
import { useRouter } from "next/router";
import Avatar from "@/components/general/Avatar";
import Button from "@/components/general/Button";

const ProfilePage: FC = () => {
  const { profile, onLogout } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (profile) return;

    router.push("/");
  }, [profile, router]);

  return (
    <main className={styles.main}>
      <Meta title={`The Catalog | Profile`} />

      <section className={styles.content}>
        {!profile ? (
          <span>You need to be logged in to view this page, redirecting...</span>
        ) : (
          <>
            <Avatar imageUrl={profile.imageUrl} />
            <h1>{profile.fullName}</h1>
            <p>{profile.email}</p>
            <Button onClick={onLogout}>Logout</Button>
          </>
        )}
      </section>
    </main>
  );
};

export default ProfilePage;
