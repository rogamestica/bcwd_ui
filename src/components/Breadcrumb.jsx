import { Container, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import '../static/css/breadcrumb.css';

const Breadcrumb = ({ paths }) => {
    return (
        <Container>
            <div className="p-5 mt-3">
                <Row>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {paths.map((path, index) => (
                                <li key={index} className={`breadcrumb-item link${index === paths.length - 1 ? " active" : ""}`}>
                                    {index === paths.length - 1 ? (
                                        path.name
                                    ) : (
                                        <Link to={path.url} className="link1">{path.name}</Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </Row>
            </div>
        </Container>

    );
};

export default Breadcrumb;
