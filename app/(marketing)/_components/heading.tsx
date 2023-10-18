"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
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
      <Button>
        Enter NoteScape
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};


// added extra margin top