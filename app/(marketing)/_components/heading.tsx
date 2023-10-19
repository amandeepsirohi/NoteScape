"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {

  const {isAuthenticated , isLoading} = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 md:mt-[-50px] "> 
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Make <p className="text-[#636363] inline-flex">Organized</p> Thoughts,Docs & Plans. Welcome to{" "}
        <span className="underline">NoteScape</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        NoteScape is a connected workspace where <br />
        better , faster work happens
      </h3>
      {isAuthenticated && !isLoading &&(
        <Button asChild>
          <Link href={"/documents"}>
        Enter NoteScape
        <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>

      )}

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
            <Button>
              Get NoteScape Free 
              <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </SignInButton>
      )}
    </div>
  );
};


// added extra margin top