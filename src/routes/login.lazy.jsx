import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, gAuth } from "@/config/firebase";

export const Route = createLazyFileRoute("/login")({
  component: RouteComponent,
});

async function googleLogin() {
  try {
    const result = await signInWithPopup(auth, gAuth);
    const user = result.user;
    console.log("User from google login:", user);
  } catch (error) {
    console.error(error);
  }
}

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log("User from email sign in:", user);

      toast.success("Logged in successfully!");
      navigate({ to: "/" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Task Manager</CardTitle>
          <CardDescription>
            Enter your credentials to access your tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-3 py-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border px-3 py-2"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Or login with google instead{" "}
            <Button
              variant="link"
              onClick={googleLogin}
              className="p-0 text-blue-500"
            >
              here
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
