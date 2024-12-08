import {FC} from "react";
import {ICategoryCardProps} from "./typing.tsx";
import unknownImage from "/images/unk.jpg"
import {Link} from "react-router-dom";

export const Card: FC<ICategoryCardProps> = ({ id, title, photo, measurement }) => {

    return (
        <div className="card h-100 d-flex flex-row align-items-center green-back comfortaa-font text-white p-4">
            <img
                src={photo || unknownImage}
                className="card-img me-4" 
                alt={title}
                style={{ maxWidth: '150px' }}
            />
            <div className="card-body flex-grow-1"> 
                <h5 className="card-title">{title}</h5>
                <ul className="list-group list-group-flush">
                    Измеряется в <strong>{measurement}</strong>
                </ul>
                <Link
                    to={`/category/${id}`}
                    className="btn green-btn mt-3"
                    state={{ from: title }}
                >
                    Узнать подробнее
                </Link>
            </div>
        </div>
    );
};



