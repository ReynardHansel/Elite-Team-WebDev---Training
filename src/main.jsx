import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "sonner";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

const user = {
  username: "Budi",
  email: "ibubudi@gmail.com",
  password: "password budi",
};

// Render the app
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <UserProvider user={user}>
        <RouterProvider router={router} />
        <Toaster />
      </UserProvider>
    </StrictMode>,
  );
}
