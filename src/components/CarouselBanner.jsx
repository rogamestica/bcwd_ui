import React from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from '../static/img/carousel_banner_img/1.png'
import img2 from '../static/img/carousel_banner_img/2.png'
import img3 from '../static/img/carousel_banner_img/3.png'
import img4 from '../static/img/carousel_banner_img/4.png'

const CarouselBanner = () => {
    const carouselInfo = [
        {
            title: "First Banner",
            images: img1,
            description: "This is a description of 1st banner",
        },
        {
            title: "Second Banner",
            images: img2,
            description: "This is a description of 2nd banner",
        },
        {
            title: "Third Banner",
            images: img3,
            description: "This is a description of 3rd banner",
        },
        {
            title: "Fourth Banner",
            images: img4,
            description: "This is a description of 4th banner",
        },
    ]
    const infos = carouselInfo.map((info, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100"
                src={info.images}
                alt="nothing"
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
            />
            <Carousel.Caption>
                <h3>{info.title}</h3>
                <p>{info.descript}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ));

    return (
        <Carousel fade >
            {infos}
        </Carousel>
    );
};

export default CarouselBanner;