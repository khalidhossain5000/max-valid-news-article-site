import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import NewsArticlePage from "../Components/NewsArticlePage/NewsArticlePage";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardPages/DashboardHome/DashboardHome";
import NewsManagement from "../Pages/DashboardPages/NewsManageMent/NewsManagement";
import CreateContent from "../Pages/DashboardPages/CreateContentPage/CreateContent";

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
    children: [
        {
            index: true,
            element:<DashboardHome />
        },
        {
          path:"content-management",
          element:<NewsManagement />
        },
        {
          path:"create-content",
          element:<CreateContent />
        }
    ],
  },
]);
