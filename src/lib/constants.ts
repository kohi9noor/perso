import {
  HomeIcon,
  LayoutTemplate,
  LayoutTemplateIcon,
  Settings2Icon,
  Trash2Icon,
} from "lucide-react";

export const data = {
  user: {
    name: "kohinoor",
    avatar: "https://avatars.githubusercontent.com/u/7744300?v=4",
    email: "kohinoornimes.dev@gmail.com",
  },
  navigation: [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Templates",
      url: "/templates",
      icon: LayoutTemplateIcon,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2Icon,
    },
    {
      title: "settings",
      url: "/settings",
      icon: Settings2Icon,
    },
  ],
};
