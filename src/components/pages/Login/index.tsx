import { FC, useEffect } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import Meta from "@/components/general/Meta";
import styles from "./index.module.scss";
import { useUserContext } from "@/contexts/User";
import { useRouter } from "next/router";

const LoginPage: FC = () => {
  const { profile, onSuccessLogin } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!profile) return;

    router.push("/");
  }, [profile, router]);

  return (
    <main className={styles.main}>
      <Meta title={`The Catalog | Login`} />

      <section className={styles.content}>
        {profile ? (
          <span>You are logged in, redirecting...</span>
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
      </section>
    </main>
  );
};

export default LoginPage;
