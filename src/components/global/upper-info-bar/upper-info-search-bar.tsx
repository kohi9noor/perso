import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className=" min-w-[60%] relative flex items-center border rounded-full bg-primary/10">
      <Button
        size={"sm"}
        variant={"ghost"}
        className=" absolute left-0 h-full rounded-l-none bg-transparent hover:bg-transparent"
      >
        <SearchIcon className=" w-4 h-4" />
        <span className=" sr-only"> Search</span>
      </Button>
      <Input
        type="text"
        className=" flex-grow bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 ml-6"
        placeholder=" Search projects by title"
      />
    </div>
  );
};

export default SearchBar;
