import { createContext, Dispatch, Profiler, ReactNode, useState } from "react";

type ProfileProps = {
  name?: string;
  username?: string;
  avatar?: string;
  repos?: [];
  followers?: number;
  following?: number;
  created_at?: number;
};

type ProfileNotFound = {
  error?: boolean;
};

type Profile = ProfileProps & ProfileNotFound;

type ProfileContextProps = {
  profile: Profile | null;
  setProfile: Dispatch<Profile>;
};

type ProfileContextProviderProps = {
  children: ReactNode;
};

export const ProfileContext = createContext({} as ProfileContextProps);

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
