import "./3-category.css";
import {FC, useEffect, useState} from "react";
import {ICategoryPageProps} from "./3-typing.tsx";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

import {Navbar} from "../components/navbar/index.tsx"
import unknownImage from "/images/unk.jpg"
import {Breadcrumbs} from "../components/breadcrumbs/index.tsx"

import {ICategory} from "../core/api/category/typing.ts"

import {getCategoryById} from "../core/api/category/index.ts";
import {CategoryList as CATEGORY_LIST_MOCK} from "../core/mock/CategoryList.ts";



export const CategoryPage: FC<ICategoryPageProps> = () => {
    const {id} = useParams();
    const [CategoryData, setCategoryData] = useState<ICategory | null>(null);

    useEffect(() => {
        if (id) {
            getCategoryById(id)
                .then((data) => {
                    setCategoryData(data);
                })
                .catch(() => {
                    const category = CATEGORY_LIST_MOCK.find(
                        (category) => category.pk === Number(id)
                    );
                    setCategoryData(category || null);
                });
        }
    }, [id]);

    if (!CategoryData || !CategoryData.title) {
        return (
            <>
                <Navbar/>
            </>
        );
    }

    return (
        <>
            <Navbar/>
            <Container className="div">
                <Breadcrumbs
                    middleItems={[
                        {
                            name: "Каталог",
                            link: "/category"
                        }
                    ]}
                    endItem={CategoryData?.title}
                />
                <div className="row mt-4">
                    <div className="col">
                        <h2>{CategoryData?.title}</h2>
                        <p className=""><strong>Измеряется в </strong> {CategoryData?.measurement}</p>
                        <p className=""><strong></strong> {CategoryData?.description}
                        </p>
                    </div>
                    <div className="col">
                        <img src={CategoryData?.photo ? (CategoryData?.photo) : (unknownImage)}
                             alt={CategoryData?.title}
                             width="200px"/>
                    </div>
                </div>
            </Container>
        </>
    );
};