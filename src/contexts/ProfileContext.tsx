import { createContext, ReactNode, useState } from "react";

type Repos = {
  name: string;
  description: string;
  url_repo: string;
};

type ProfileProps = {
  name: string;
  username: string;
  image: string;
  followers: number;
  following: number;
  repos: Repos[];
};

type ProfileContextData = {
  profile: ProfileProps | null;
  hasError: boolean;
  setProfileData: (profile: ProfileProps) => void;
  setError: (state: boolean) => void;
};

type ProfileContextProviderProps = {
  children: ReactNode;
};

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profile, setProfile] = useState(null);
  const [hasError, setHasError] = useState(false);

  function setProfileData(profile: ProfileProps) {
    setProfile(profile);
  }

  function setError(state: boolean) {
    setHasError(state);
  }

  return (
    <ProfileContext.Provider
      value={{ profile, setProfileData, hasError, setError }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
