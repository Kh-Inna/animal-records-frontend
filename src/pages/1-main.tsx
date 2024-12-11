import "./1-main.css";
import {FC} from "react";

import {Container} from "react-bootstrap";
import {Navbar} from "../components/navbar";

export const MainPage: FC = () => {
    return (
        <>
            <Navbar/>
            <Container className="comfortaa-font">
                <Container className="intro">
                    <h1>
                    <span style={{ background: 'linear-gradient(109.11deg,#006455 27.14%,#20c293 112.3%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Животные рекордсмены </span> </h1>
                    <Container className="div text">
                        <p>
                            Добавьте животное и его рекорд по категории.
                        </p>
                    </Container>
                </Container>
            </Container>
        </>
    );
};