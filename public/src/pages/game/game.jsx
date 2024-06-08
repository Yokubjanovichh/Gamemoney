import React, { useRef } from "react";
import "./game.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import img from "./img/g1.png";
import i1 from "./img/1.png";
import i2 from "./img/2.png";
import i3 from "./img/3.png";
import i4 from "./img/4.png";

export const Game = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const slider = useRef(null);
  const imgs = [i1, i2, i3, i4];

  const next = () => slider?.current?.slickNext();
  const prev = () => slider?.current?.slickPrev();

  return (
    <div className="game">
      <figure className="game__img">
        <img src={img} alt="" />
        <figcaption className="game__caption">
          <div>
            <span>-25%</span>

            <p>
              <span>250Р</span>
              <i>795.35Р</i>
            </p>
          </div>

          <p>04:02:01:16</p>
        </figcaption>
      </figure>

      <div className="game__info">
        <div className="game__info__header">
          <button onClick={handleBack}>
            <MdKeyboardArrowLeft />
            <span>Вернуться к играм</span>
          </button>

          <h1>Divinity: Original Sin II - Divine Edition</h1>

          <div className="game__header__actions">
            <ol className="game__hashtags">
              <li>Приключенческие игры</li>
              <li>Ролевые игры</li>
              <li>Стратегии</li>
            </ol>

            <div className="game__next__prev">
              <button onClick={prev}>
                <MdKeyboardArrowLeft />
              </button>
              <button onClick={next}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div className="game__lavels">
            <div>
              <p>7,6</p>
            </div>
          </div>
        </div>

        <div className="game__images">
          <Slider {...settings} ref={slider}>
            {imgs?.map((img, index) => {
              return (
                <figure key={index} className="game__image">
                  <img src={img} alt="img" />
                </figure>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 1800,
  cssEase: "linear",
  slidesToScroll: 2,
  dots: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
