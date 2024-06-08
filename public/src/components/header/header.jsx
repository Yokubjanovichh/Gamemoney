import React, { memo, useState, useRef, Fragment, useEffect } from "react";
import "./header.css";
import logo from "./icons/logo.svg";
import rub from "./icons/rub.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaTelegramPlane, FaVk } from "react-icons/fa";
import { Mousedown } from "../../utility/mousedown";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Header = memo(() => {
  const [select, setSelect] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = (e) => setMenu(!menu);

  const selectRef = useRef(null);
  const menuRef = useRef(null);

  Mousedown({ modalRef: selectRef, onClose: () => setSelect(false) });
  Mousedown({ modalRef: menuRef, onClose: () => setMenu(false) });

  const handleSelect = (e) => {
    setSelect(false);
    navigate("/game/3");
  };

  return (
    <Fragment>
      <header className="header">
        <nav className="header__navbar">
          <button className="menu" onClick={handleMenu} aria-label="menu">
            {menu ? <HiOutlineX /> : <HiOutlineMenuAlt2 />}
          </button>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className="header__my-orders"
            onClick={() => navigate("/order")}
          >
            <img src={rub} alt="rub" />
            <span>Мои Заказы</span>
          </button>

          <div
            className={"dropdown__wrapper" + (select ? " active" : "")}
            ref={selectRef}
          >
            <button onClick={() => setSelect(!select)}>
              <span>Все игры</span>
              {select ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>

            <div className={"dropdown__content" + (select ? " active" : "")}>
              <ol className="dropdown__list">
                {games.map((game) => {
                  return (
                    <li
                      key={game.id}
                      onClick={handleSelect}
                      className="dropdown__item"
                    >
                      <strong></strong>
                      <span>{game.title}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <NavLink to="/games">Игры по скидкам</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/reviews">Отзывы</NavLink>
        </nav>

        <div className="social">
          <button>
            <FaTelegramPlane />
          </button>
          <button>
            <FaVk />
          </button>
        </div>
      </header>

      <div className={"header__menu" + (menu ? " active" : "")} ref={menuRef}>
        <NavLink to="/discount" onClick={handleMenu}>
          <span>Лента активности</span>
        </NavLink>

        <NavLink to="/all-games" onClick={handleMenu}>
          <span>Все игры</span>
          <MdKeyboardArrowRight />
        </NavLink>
        <NavLink to="/games" onClick={handleMenu}>
          <span>Игры по скидкам</span>
          <MdKeyboardArrowRight />
        </NavLink>

        <NavLink to="/faq" onClick={handleMenu}>
          <span>FAQ</span>
        </NavLink>

        <NavLink to="/reviews" onClick={handleMenu}>
          <span>Отзывы</span>
        </NavLink>
      </div>
    </Fragment>
  );
});

const games = [
  {
    id: 1,
    title: "Fortnite",
  },
  {
    id: 2,
    title: "Genshin Impact",
  },
  {
    id: 3,
    title: "Tower of Fantasy",
  },
  {
    id: 4,
    title: "Mobile Legends",
  },
  {
    id: 5,
    title: "Apex Legends",
  },
  {
    id: 6,
    title: "PUBG",
  },
  {
    id: 7,
    title: "League of Legends",
  },
  {
    id: 8,
    title: "World of Warcraft",
  },
  {
    id: 9,
    title: "Roblox",
  },
];
