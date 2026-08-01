import type { IconType } from "react-icons";
import {
  IoGridOutline,
  IoPeopleOutline,
  IoNewspaperOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export type SidebarLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const sidebarLinks: SidebarLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: IoGridOutline,
  },
  {
    label: "User Management",
    href: "/dashboard/users",
    icon: IoPeopleOutline,
  },
  {
    label: "Blog & News Management",
    href: "/dashboard/blog-news",
    icon: IoNewspaperOutline,
  },
  {
    label: "Setting Management",
    href: "/dashboard/settings",
    icon: IoSettingsOutline,
  },
];