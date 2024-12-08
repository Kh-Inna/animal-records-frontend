import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {MainPage} from "./pages/1-main";
import {CategoryCatalogPage} from "./pages/2-categories";
import {CategoryPage} from "./pages/3-category";

export const AppRoutes = (props: IGlobalProps) => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage {...props} />,
        },
        {
            path: "category",
            element: <CategoryCatalogPage {...props} />,
        },
        {
            path: "category/:id",
            element: <CategoryPage/>,
        },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};