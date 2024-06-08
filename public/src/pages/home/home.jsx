import React from "react";
import "./home.css";
import imgd from "./icon/bgd.svg";
import imgm from "./icon/bgm.svg";

export const Home = () => {
  return (
    <div className="home">
      <figure className="home__img">
        <img src={imgd} alt="imgd" className="home__img--d" />
        <img src={imgm} alt="imgd" className="home__img--m" />
        <figcaption className="home__img--caption">
          <h2>Пополнение баланса Steam</h2>
          <button>Как это работает?</button>
        </figcaption>
      </figure>
    </div>
  );
};
