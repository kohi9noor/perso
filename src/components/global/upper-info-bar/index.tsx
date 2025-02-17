import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "@prisma/client";
import React from "react";
import SearchBar from "./upper-info-search-bar";
import { ModeToggle } from "../mode-toggle";

type Props = {
  children: React.ReactNode;
  user: User;
};

const UpperInfoBar = ({ children, user }: Props) => {
  return (
    <>
      <header className=" sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2 bg-background p-4 justify-between">
        <SidebarTrigger />
        <Separator orientation="vertical" className=" mr-2 h-4" />

        <div className=" w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap">
          <SearchBar />
        </div>
        <ModeToggle />
      </header>
    </>
  );
};

export default UpperInfoBar;
