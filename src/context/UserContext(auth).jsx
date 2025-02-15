//* NOTE:
//* Ini contoh bentukan kl misal mau bikin Wrapper/Provider buat authentication pakai component UserContext

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    //? Remove the listener when the component is unmounted
    return() => unsubscribe();
  }, []);

  return <UserContext.Provider value={{user, loading}}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}

export default UserContext;
