"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { User } from "@prisma/client";

const NavFooter = ({ prismaUser }: { prismaUser?: User }) => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SignedIn>
          <SidebarMenuButton
            size={"lg"}
            className=" data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <UserButton />
            <div className=" grid flex-1 text-left text-xs leading-tight group-data-[collapsible=icon]:hidden">
              <span className=" truncate font-semibold">{user?.fullName}</span>
              <span className=" truncate text-gray-400">
                {user?.emailAddresses[0].emailAddress}
              </span>
            </div>
          </SidebarMenuButton>
        </SignedIn>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
