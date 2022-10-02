import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "@/contexts/User";
import Avatar from "@/components/general/Avatar";
import Button from "@/components/general/Button";
import Layout from "@/components/general/Layout";
import ContentBox from "@/components/general/ContextBox";

const ProfilePage: FC = () => {
  const { profile, onLogout } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (profile) return;

    router.push("/");
  }, [profile, router]);

  return (
    <Layout meta={{ title: `The Catalog | Profile` }}>
      <ContentBox>
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
      </ContentBox>
    </Layout>
  );
};

export default ProfilePage;
