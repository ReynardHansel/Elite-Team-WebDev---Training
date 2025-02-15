import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { auth } from "@/config/firebase";
import { useState, useEffect } from "react";

import "../CSS/home.css";
import { Button } from "@/components/ui/button";

function handleSignOut() {
  auth.signOut().then(() => {
    window.location.reload();
  });
}

function RootComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className="flex justify-between bg-white p-4 text-2xl">
        <div className="flex gap-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/tasklist" className="[&.active]:font-bold">
            View / Add Task
          </Link>
        </div>
        <div>
          {user ? (
            <Button onClick={handleSignOut}>Sign out</Button>
          ) : (
            <>
              <Button variant="outline" className="mr-4">
                <Link to="/signup" className="[&.active]:font-bold">
                  Sign Up
                </Link>
              </Button>
              <Button>
                <Link to="/login" className="[&.active]:font-bold">
                  Login
                </Link>
              </Button>
            </>
          )}
        </div>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  pendingComponent: () => (
    <div className="h-screen w-screen text-6xl">Loading...</div>
  ),
  beforeLoad: async () => {
    // Wait for Firebase to initialize and determine auth state
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve({ user });
      });
    });
  },
  // Optionally, you can add a loader to make the user available to child routes
  // loader: ({ context }) => {
  //   return { user: context.user };
  // },
});
