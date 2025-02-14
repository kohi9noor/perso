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

const AppSidebar = ({
  recentProjects,
  user,
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
      <SidebarHeader className="pt-6 px-3 pb-0">
        <SidebarMenuButton
          size={"lg"}
          className="data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className=" flex items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <span className=" text-primary text-3xl font-medium">Perso</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className=" px-3 mt-10 gap-y-6">
        <NavMain navigation={data.navigation} />
        <RecentOpen recentProjects={recentProjects} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
