import React, { createContext, useContext } from "react";

const UserContext = createContext(null);

export function UserProvider({ children, user }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}

export default UserContext;
