import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 px-4 sm:px-0 lg:px-0 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-18" alt="hirely Logo" />
        </Link>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
};

export default Header;
