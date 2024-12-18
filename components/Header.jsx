import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";
import { checkUser } from "../lib/checkUser";
import UserLoading from "./user-loading";

const Header = async () => {
  await checkUser();

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
            SyncWave
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button className="flex items-center gap-2">
              <PenBox size={18} />
              <span>Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button varient="outline">Sign-In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            {" "}
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
    </header>
  );
};

export default Header;
