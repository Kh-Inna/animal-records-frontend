import {sendRequest} from "../index.ts";

import {IGetCategoryListResponse, IAnimalByIdResponse, ICategory} from "./typing.ts";

export const getCategoryList = async (searchTitle?: string) => {
    try {
        const response: IGetCategoryListResponse = await sendRequest({
            method: "GET",
            path: "/category/",
            params: searchTitle ? {title: searchTitle} : undefined,
        });
        return response;
    } catch (error) {
        console.error("Error fetching category list:", error);
        throw error;
    }
};

export const getCategoryById = async (id: string) => {
    try {
        const response: ICategory = await sendRequest({
            method: "GET",
            path: `/category/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching category by id:", error);
        throw error;
    }
};


export const getAnimalById = async (id: string) => {
    try {
        const response: IAnimalByIdResponse = await sendRequest({
            method: "GET",
            path: `/animal/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching animal by id:", error);
        throw error;
    }
};