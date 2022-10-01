import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "@/contexts/User";
import Header from "@/components/general/Header";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      <UserContextProvider>
        <Header />
        <Component {...pageProps} />
      </UserContextProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
