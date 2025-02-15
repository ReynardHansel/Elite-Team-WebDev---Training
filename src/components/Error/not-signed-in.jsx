import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function NotSignedIn() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold">Dah sign in blm bang? 🤨</p>
      <div className="flex gap-2">
        <Button variant="outline">
          <Link to="/signup">Sign Up</Link>
        </Button>
        <Button>
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    </div>
  );
}
