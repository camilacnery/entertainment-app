import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useUserContext } from "@/contexts/User";
import Layout from "@/components/general/Layout";
import ContentBox from "@/components/general/ContextBox";

const LoginPage: FC = () => {
  const { profile, onSuccessLogin } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!profile) return;

    router.push("/");
  }, [profile, router]);

  return (
    <Layout meta={{ title: `The Catalog | Login` }}>
      <ContentBox>
        {profile ? (
          <h1>You are logged in, redirecting...</h1>
        ) : (
          <>
            <h1>Login with Google</h1>
            <GoogleLogin
              onSuccess={({ credential }: CredentialResponse) => {
                if (!credential) return;
                onSuccessLogin(credential);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </>
        )}
      </ContentBox>
    </Layout>
  );
};

export default LoginPage;
