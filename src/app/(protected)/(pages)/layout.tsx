import { getRecentProjects } from "@/actions/project";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
      >
        {children}
      </AppSidebar>
    </SidebarProvider>
  );
};

export default DashboardLayout;
