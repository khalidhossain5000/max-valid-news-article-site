import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import NewsArticlePage from "../Components/NewsArticlePage/NewsArticlePage";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <NewsArticlePage />,
      },
    ],
  },
  //DASHBOARD LAYOUT
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [],
  },
]);
