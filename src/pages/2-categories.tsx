import "./2-categories.css";
import {FC} from "react";
import {Link} from "react-router-dom";

import {Navbar} from "../components/navbar/index.tsx"
import {Button, Container} from "react-bootstrap";
import {Card} from "../components/Card/index.tsx"

import {useCategoryCatalogPage} from "./2-useCatalog.tsx";
import {ICategoryCardProps} from "../components/Card/typing.tsx";
import BasketImage from "/images/basket.png"
import {Breadcrumbs} from "../components/breadcrumbs/index.tsx"



export const CategoryCatalogPage: FC = () => {
    const {
        CategoryList,
        AnimalID,
        itemsInCart,
        handleSearchCategoryClick,
        handleSearchNameChange,
    } = useCategoryCatalogPage();

    return (
        <>
            <Navbar/>
            <Container>
                <Breadcrumbs
                    endItem="Каталог"
                />
                <Container className="d-flex mt-4 mb-4 p-0">
                    <div className="flex-grow-1">
                        <input
                            type="text"
                            className="input form-control"
                            onChange={handleSearchNameChange}
                            placeholder="Поиск"
                            aria-label="Поиск"
                        />

                    </div>
                    <div className="px-3">
                        <Button
                            onClick={handleSearchCategoryClick}
                            className="green-btn ml-3 mr-3"
                        >
                            Поиск
                        </Button>
                    </div>

                    <Link
                        to={"/animal/" + AnimalID}
                        className={AnimalID !== undefined && AnimalID !== null && AnimalID !== 0 ? "btn green-border cart-button" : "btn green-border cart-button non-clickable"}
                        state={{from: AnimalID}}
                    >
                        {itemsInCart}
                        {<img src={BasketImage} width="25" alt="cart"/>}
                    </Link>
                </Container>

                {CategoryList && !!CategoryList.length ? (
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {CategoryList.map((category, index) => {
                        const props: ICategoryCardProps = {
                            id: category.pk,
                            title: category.title,
                            measurement: category.measurement,
                            description: category.description,
                            photo: category.photo,
                        };

                        return (
                            <div className="col">
                                <Card key={index} {...props} />
                            </div>
                        );
                    })}
                </div>
                ) : (
                    <Container className="d-flex justify-content-center mt-4 mb-5">
                        <h2>Ничего не найдено</h2>
                    </Container>
                )}
            </Container>
        </>
    );
};