import React from "react";
import "./order.css";
import img from "./stm.svg";
import { BiSupport } from "react-icons/bi";

export const Order = () => {
  return (
    <div className="order">
      <figure className="order__figure">
        <img src={img} alt="" />

        <figcaption className="order__figcaption">
          <h1>Оплата принята</h1>

          <p>
            <span>Номер заказа</span>
            <i>3611356</i>
          </p>
          <p>
            <span>Дата заказа</span>
            <i>19.02.2024 11:36:12</i>
          </p>
          <p>
            <span>Логин</span>
            <i>Login</i>
          </p>
          <p>
            <span>Сумма заказа</span>
            <i>1500Р</i>
          </p>
          <p>
            <span>Статус заказа</span>
            <i>Выполнено</i>
            <img src={require("./i1.png")} alt="" />
          </p>
        </figcaption>
      </figure>

      <h2>В скором времени баланс вашего Steam будет пополнен</h2>
      <p>
        Есть перечень требований к аккаунту, соответвие которых позволит нам
        совершить пополнение баланса: Страной вашего аккаунта должна быть
        Россия. Мы не можем отправить средства пользователям из следующих
        регионов: Крым, ЛНР, ДНР и тем пользователям, на аккаунте которых
        красная табличка (КТ).
      </p>
      <h2>Обратите внимание на статус заказа</h2>

      <div className="order__status">
        <div className="order__i1">
          <h3>Выполнено</h3>
          <p>В скором времени заказ будет обработан, пожалуйста ожидайте</p>
          <img src={require("./i1.png")} alt="" />
        </div>
        <div className="order__i2">
          <h3>Обрабатывается</h3>
          <p>В скором времени заказ будет обработан, пожалуйста ожидайте</p>
          <img src={require("./i2.png")} alt="" />
        </div>
        <div className="order__i3">
          <h3>Отменен</h3>
          <p>В скором времени заказ будет обработан, пожалуйста ожидайте</p>
          <img src={require("./i3.png")} alt="" />
        </div>
      </div>

      <div className="order__support">
        <BiSupport />

        <p>
          Обратитесь в техническую поддержку,при обращении укажите номер вашего
          заказа
        </p>
      </div>
    </div>
  );
};
