import { ReactNode, FC, createContext, useState, useContext, useEffect } from "react";
import { IUserProfile } from "@/domain/User";
import { decodeJwt } from "@/utils/jwt";

interface IDecodedUser {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export type TUserContext = {
  profile?: IUserProfile;
  onSuccessLogin: (userJwt: string) => void;
  onLogout: () => void;
};

const UserContext = createContext<TUserContext>({} as TUserContext);

type Props = {
  children: ReactNode;
};

const STORAGE_ID = "app/user-token";

const UserContextProvider: FC<Props> = ({ children }) => {
  const [profile, setProfile] = useState<IUserProfile>();

  const setProfileFromToken = (userJwt: string) => {
    const profileData = decodeJwt<IDecodedUser>(userJwt);

    setProfile({
      fullName: profileData.name,
      firstName: profileData.given_name,
      email: profileData.email,
      imageUrl: profileData.picture,
    });
  };

  const onSuccessLogin = (userJwt: string) => {
    localStorage.setItem(STORAGE_ID, userJwt);
    setProfileFromToken(userJwt);
  };

  const onLogout = () => {
    localStorage.removeItem(STORAGE_ID);
    setProfile(undefined);
  };

  useEffect(() => {
    const userJwt = localStorage.getItem(STORAGE_ID);
    if (!userJwt) return;

    setProfileFromToken(userJwt);
  }, []);

  return (
    <UserContext.Provider
      value={{
        profile,
        onSuccessLogin,
        onLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContext, UserContextProvider };
