"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavMain = ({
  navigation,
}: {
  navigation: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}) => {
  const pathname = usePathname();
  return (
    <SidebarGroup className=" p-0">
      <SidebarMenu>
        {navigation.map((item) => {
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={`${pathname.includes(item.url) && " bg-muted"} `}
                asChild
                tooltip={item.title}
              >
                <Link
                  href={item.url}
                  className={` text-lg ${
                    pathname.includes(item.url) && "font-bold"
                  }`}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
