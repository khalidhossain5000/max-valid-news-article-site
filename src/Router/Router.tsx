import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import NewsArticlePage from "../Components/NewsArticlePage/NewsArticlePage";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                element:<NewsArticlePage />
            }
        ]
    }
])