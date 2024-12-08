export interface ICategory {
    pk: number;
    title: string;
    photo: string;
    is_active: boolean;
    measurement: string;
    description: string;
}

export interface IGetCategoryListResponse {
    categories: ICategory[];
    animal_id: number;
    items_in_cart: number;
}

export interface IAnimalByIdResponse {
    pk: number;
    status: string;
    animal: string;
    period: string;
    habitat: string;
    creation_date: string;
    formation_date: string;
    completion_date: string;
    creator_id: number;
    moderator_id: number;
    record_date: string;
    
    category_list: IGetCategoryListResponse[];
}