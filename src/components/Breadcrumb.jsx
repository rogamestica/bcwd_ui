import { Container, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  const robotoRegular = {
    fontFamily: "Roboto Regular",
    src: `url(${require("../static/roboto-font/Roboto-Regular.ttf")}) format("truetype")`,
  };

  // Apply the font face declaration dynamically
  document.fonts.add(new FontFace("Roboto Regular", robotoRegular.src));
  document.body.style.fontFamily = robotoRegular.fontFamily;

  return (
    <Container>
      <div className="p-5 mt-3">
        <Row>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {paths.map((path, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === paths.length - 1 ? "active" : ""
                  }`}
                >
                  {index === paths.length - 1 ? (
                    path.name
                  ) : (
                    <Link to={path.url}>{path.name}</Link>
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
