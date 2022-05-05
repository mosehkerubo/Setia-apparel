import React from "react";
import Img2 from "../../../public/Images/1.jpg";
import Image from "next/image";
import styled from "styled-components";
import { Link } from "@mui/material";

const Img3 = styled.image`
  width: 750px;
  height: 750px;
  object-fit: cover;
`;
const Heromain = styled.div``;
const ImageContainer = styled.div`
  object-fit: cover;
  // background-color:lightgray;
  margin: 2em;
`;
const Heroimg = styled.div`
  margin: 2em;
`;
const Container = styled.div`
  margin: 2em;
  display: flex;
  flex-wrap: wrap;
`;

const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="Images/bag4.jpg"
              className="d-block w-100 img1"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src="Images/kitenge-june-2.jpg"
              className="d-block w-100 img1"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>

          <div className="carousel-item">
            <img
              src="Images/slide1.jpg"
              className="d-block w-100 img1"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Heromain>
        <Container>
          <ImageContainer>
            <Heroimg>
              <div className="heroh1"><h1>Shop Our Range</h1></div>

              <div className="Heroimg">
                <div>
                <Link href={"/categories/skirts"}>
                  <img
                    src="Images/8.jpg"
                    width={368}
                    height={368}
                    objectFit="none"
                  />
                  </Link>
                </div>
                <div>

                <Link href={"/categories/bag"}>
                  <img
                    src="Images/bag.png"
                    width={368}
                    height={368}
                    objectFit="none"
                  />
                  </Link>
                </div>
                <div>
                <Link href={"/categories/dresses"}>
                  <img
                    src="Images/dress24.jpg"
                    width={368}
                    height={368}
                    objectFit="none"
                  />
                  </Link>
                </div>
                <div>
                <Link href={"/categories/kids"}>
                  <img
                    src="Images/kid11.jpg"
                    width={368}
                    height={368}
                    objectFit="none"
                  />
                  </Link>
                </div>
                <div>
                <Link href={"/categories/kimono"}>
                  <img
                    src="Images/14.jpg"
                    width={368}
                    height={368}
                    objectFit="none"
                  />
                  </Link>
                </div>
              </div>
            </Heroimg>
          </ImageContainer>
        </Container>
      </Heromain>
    </>
  );
};
export default Hero;
