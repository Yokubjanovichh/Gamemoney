import React, { useState, useRef } from "react";
import "./games.css";
import { FiSearch } from "react-icons/fi";
import { Mousedown } from "../../utility/mousedown";
import { LuFilter } from "react-icons/lu";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import g1 from "./g1.png";
import g2 from "./g2.png";
import { useNavigate } from "react-router-dom";

export const Games = () => {
  const [filter, setFilter] = useState(false);
  const selectRef = useRef(null);
  const navigate = useNavigate();

  const closeFilter = () => setFilter(false);
  Mousedown({ modalRef: selectRef, onClose: () => closeFilter() });
  const getGame = (id) => navigate(`/game/${id}`);
  const slider = useRef(null);
  const next = () => slider?.current?.slickNext();
  const prev = () => slider?.current?.slickPrev();

  return (
    <div className="games">
      <div className="games__header">
        <h2>Игры по скидкам</h2>
        <label>
          <input
            type="text"
            name="search"
            placeholder="Поиск игры"
            autoComplete="off"
          />
          <FiSearch />
        </label>

        <div className="games__filter-wrapper">
          <div
            className={"games__filter " + (filter ? "active" : "")}
            ref={selectRef}
          >
            <button onClick={() => setFilter(!filter)}>
              <LuFilter />
              <span>Фильтры</span>
              {filter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>

            <ol className={"games__filter-list " + (filter ? "active" : "")}>
              <li onClick={closeFilter}>По высокой цене</li>
              <li onClick={closeFilter}>По низкой цене</li>
              <li onClick={closeFilter}>По высокой скидке</li>
              <li onClick={closeFilter}>По низкой скидке</li>
            </ol>
          </div>

          <button>Все игры</button>
          <div>
            <button onClick={prev}>
              <MdKeyboardArrowLeft />
            </button>
            <button onClick={next}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="games__slider">
        <Slider {...settings} ref={slider}>
          {games?.map((game, index) => {
            return (
              <figure
                key={game.id}
                className="game_item"
                onClick={() => getGame(game.id)}
              >
                <img src={game.img} alt={game.title} />
                <figcaption className="game_item__info">
                  <div>
                    <span>{game?.discount}</span>
                    <span>{game.price}</span>
                  </div>
                  <p>{game.finished_at}</p>
                </figcaption>
              </figure>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 1800,
  cssEase: "linear",
  slidesToScroll: 2,
  dots: false,

  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g1,
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g2,
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "50%",
    price: "250",
    img: g1,
  },
  {
    id: 4,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g2,
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g1,
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g2,
  },
  {
    id: 7,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g1,
  },
  {
    id: 8,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g2,
  },
  {
    id: 9,
    title: "Cyberpunk 2077",
    finished_at: "04:02:01:16",
    discount: "-50%",
    price: "250",
    img: g1,
  },
];
