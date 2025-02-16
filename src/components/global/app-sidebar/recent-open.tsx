"use client";

import React from "react";
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
import { useSlidesStore } from "@/store/slides";
import { JsonValue } from "@prisma/client/runtime/library";
type Props = {
  recentProjects: Project[];
};

const RecentOpen = ({ recentProjects }: Props) => {
  const router = useRouter();
  const { setSlides } = useSlidesStore();

  const handleClickProject = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error("Project not found", {
        description: "Please try again",
      });
      return;
    }
    setSlides(JSON.parse(JSON.stringify(slides)));
    router.push(`/presentation/${projectId}`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
      <SidebarMenu>
        {recentProjects.length > 0
          ? recentProjects.map((project) => (
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
            ))
          : ""}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default RecentOpen;
