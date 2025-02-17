"use client";
import { Project, User } from "@prisma/client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import NavMain from "./nav-main";
import { data } from "@/lib/constants";
import RecentOpen from "./recent-open";
import NavFooter from "./nav-footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AppSidebar = ({
  recentProjects,
  ...props
}: {
  recentProjects: Project[];
} & {
  user?: User;
} & React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar
      className=" max-w-[212px] bg-background-90"
      collapsible="icon"
      {...props}
    >
      <SidebarHeader className="pt-6 px-2 pb-0">
        <SidebarMenuButton
          size={"lg"}
          className="data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Avatar className="h-6 w-6 p-1 rounded-lg bg-slate-200">
              <AvatarImage src={"/logo.png"} alt={"logo"} />
            </Avatar>
          </div>
          <span className="truncate text-primary text-xl font-semibold">
            Perso
          </span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-10 gap-y-6">
        <NavMain navigation={data.navigation} />
        <RecentOpen recentProjects={recentProjects} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
