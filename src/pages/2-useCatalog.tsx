import {useEffect, useState} from "react";
import {ICategory} from "../core/api/category/typing.ts"
import {getCategoryList} from "../core/api/category/index.ts"

import {CategoryList as CATEGORY_LIST_MOCK} from "../core/mock/CategoryList.ts";
import {Animal as ANIMAL_MOCK} from "../core/mock/Animal.ts";

import {ChangeEvent} from "../App.typing.tsx";

export const useCategoryCatalogPage = () => {
    const [CategoryList, setCategoryList] = useState<ICategory[]>([]);
    const [AnimalID, setAnimal] = useState<number>();
    const [itemsInCart, setItemsInCart] = useState<number>(0);

    const [searchCategoryTitle, setCategoryTitle] = useState("");

    const handleSearchCategoryClick = () => {
        getCategoryList(searchCategoryTitle)
            .then((data) => {
                setCategoryList(data.categories);
            })
            .catch(() => {
                const filteredCategory = CATEGORY_LIST_MOCK.filter((category) =>
                    category.title.toLowerCase().startsWith(searchCategoryTitle.toLowerCase())
                );
                setCategoryList(filteredCategory);
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        setCategoryTitle(e.target.value);
    };

    useEffect(() => {
        getCategoryList()
            .then((data) => {
                setCategoryList(data.categories);
                setAnimal(data.animal_id)
                setItemsInCart(data.items_in_cart)
                console.log(CategoryList)
            })
            .catch(() => {
                setCategoryList(CATEGORY_LIST_MOCK)
                setAnimal(0)
                setItemsInCart(ANIMAL_MOCK.category_list.length)
                console.log(CategoryList)
            });
    }, []);

    return {
        CategoryList,
        AnimalID,
        itemsInCart,
        handleSearchCategoryClick,
        handleSearchNameChange,
    };
};