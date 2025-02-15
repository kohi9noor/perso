"use client";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Project } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  recentProjects: Project[];
};
const RecentOpen = ({ recentProjects }: Props) => {
  const router = useRouter();

  const handleClickProject = (projectId: string, slides: any) => {
    if (!projectId || !slides) {
      toast.error("Project not found", {
        description: "Please try again",
      });
      return;
    }

    router.push(`/presentation/${projectId}`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
      <SidebarMenu>
        {recentProjects.length > 0
          ? recentProjects.map((project) => {
              return (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton
                    className=" "
                    asChild
                    tooltip={project.title}
                  >
                    <Button
                      className=" text-xs items-center justify-start"
                      onClick={() =>
                        handleClickProject(project.id, project.slides)
                      }
                      variant={"link"}
                    >
                      <span>{project.title}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })
          : ""}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default RecentOpen;
