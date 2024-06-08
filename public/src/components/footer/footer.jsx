import React, { memo } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaVk } from "react-icons/fa";

export const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__social">
          <button>
            <FaTelegramPlane />
          </button>
          <button>
            <FaVk />
          </button>
        </div>

        <Link to="/doc?page=requisites">Реквизиты</Link>
        <Link to="/doc?page=public-offer">Публичная оферта</Link>
        <Link to="/doc?page=privacy-policy">Политика конфиденциальности</Link>
      </div>

      <p>©Gamemoney {new Date().getFullYear()}</p>
    </footer>
  );
});
