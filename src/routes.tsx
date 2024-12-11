import {RouteObject, useRoutes} from "react-router-dom";
import {MainPage} from "./pages/1-main";
import {CategoryCatalogPage} from "./pages/2-categories";
import {CategoryPage} from "./pages/3-category";

export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage />,
        },
        {
            path: "category",
            element: <CategoryCatalogPage />,
        },
        {
            path: "category/:id",
            element: <CategoryPage/>,
        },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};