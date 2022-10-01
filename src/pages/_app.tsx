import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "@/contexts/User";
import Header from "@/components/general/Header";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="628478310599-240khn8kh6qn2d5v4g7ptli5b3tl5sgc.apps.googleusercontent.com">
      <UserContextProvider>
        <Header />
        <Component {...pageProps} />
      </UserContextProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
