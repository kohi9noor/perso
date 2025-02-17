import { getRecentProjects } from "@/actions/project";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("/sign-in");
  }

  const recentProject = await getRecentProjects();

  return (
    <SidebarProvider>
      <AppSidebar
        recentProjects={recentProject.projects || []}
        user={checkUser.user}
      ></AppSidebar>
      <SidebarInset>
        <UpperInfoBar user={checkUser?.user}>{children}</UpperInfoBar>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
