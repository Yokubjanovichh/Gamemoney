import React, { memo, useState, Fragment, useRef } from "react";
import "./payment.css";
import { NumericFormat } from "react-number-format";
import { Commission } from "../commission/commission";
import { FaCheck } from "react-icons/fa6";
import ticket from "./icon/ticket.svg";
import rub from "./icon/rub.svg";
import kzt from "./icon/kzt.svg";
import usd from "./icon/usd.svg";
import visa from "./icon/visa.svg";
import qiwi from "./icon/qiwi.svg";
import { Mousedown } from "../../utility/mousedown";
import { useLocation } from "react-router-dom";

export const Payment = memo(() => {
  const [crrs, setCrrs] = useState("RUB");
  const [system, setSystem] = useState("VISA");
  const [uid, setUid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const modalRef = useRef(null);
  const location = useLocation();
  Mousedown({ modalRef, onClose: () => setUid(false) });

  const handelSelectCurrency = (name, index) => {
    const select_currency = document.querySelector(".select_currency");
    select_currency.setAttribute("style", `--select: ${index}`);
    setCrrs(name);
  };

  const page = new URLSearchParams(window.location.search).get("page");

  React.useEffect(() => {
    switch (page) {
      case "requisites":
        return setHidden(true);
      case "public-offer":
        return setHidden(true);
      case "privacy-policy":
        return setHidden(true);
      default:
        return setHidden(false);
    }
  }, [page, location]);

  return (
    <Fragment>
      <div className="payment" style={{ display: hidden ? "none" : "flex" }}>
        <div className=" payment__header">
          <p className="py-title">Платежные данные</p>
          <button>
            <span>Использовать промокод</span>
            <img src={ticket} alt="" />
          </button>
        </div>

        <div className="payment__body">
          <label>
            <input
              type="text"
              name="login"
              placeholder="Логин"
              autoComplete="off"
            />
            <button onClick={() => setUid(!uid)}>Где взять?</button>
          </label>

          <label>
            <input
              type="text"
              name="email"
              placeholder="mail@gmail.ru"
              autoComplete="off"
            />
          </label>

          <div className="pay_currency">
            <NumericFormat
              name="amount"
              allowLeadingZeros
              thousandSeparator=" "
              placeholder="Сумма платежа"
              autoComplete="off"
            />

            <div className="select_currency">
              <strong></strong>
              {currency?.map((item, index) => {
                const active = crrs === item.name ? "active" : "";
                return (
                  <button
                    key={item.id}
                    className={active}
                    onClick={() => handelSelectCurrency(item.name, index)}
                  >
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="payment__commission">
          <p className="py-title">Снижение комиссии</p>
          <Commission />
        </div>

        <div className="payment__system">
          <p className="py-title">Выберите платежную систему</p>

          <div className="pay_system">
            {pay_system?.map((item) => {
              const active = system === item.name ? "active" : "";
              return (
                <button
                  key={item.id}
                  type="button"
                  className={active}
                  onClick={() => setSystem(item.name)}
                >
                  <img src={item.img} alt="" />
                  <span className="py_check">
                    <FaCheck />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pay_info">
            <p>
              <span>Заплатите</span>
              <strong></strong>
              <i>260.35₽</i>
            </p>
            <p>
              <span>Комиссия сервиса</span>
              <strong></strong>
              <i>20.15₽</i>
            </p>
            <p>
              <span>Получите на Steam</span>
              <strong></strong>
              <i>200₽</i>
            </p>
            <p>
              <span>Банковские издержки</span>
              <strong></strong>
              <i>40.2₽</i>
            </p>
          </div>
          <button>Оплатить 260.35₽</button>
        </div>
      </div>

      <div className={"modal_info " + (uid ? "active" : "")}>
        <div
          className={"modal__content " + (uid ? "active" : "")}
          ref={modalRef}
        >
          <h2>Где взять UID?</h2>
          <figure>
            <img src={require("./icon/uid.png")} alt="" />
          </figure>

          <ol className="modal__content__list">
            <li>1. Зайдите в игру</li>
            <li>2. Откройте меню</li>
            <li>3. Скопируйте UID под аватаром</li>
          </ol>

          <p>Также UID можно посмотреть в правом нижнем углу Genshin Impact</p>

          <div className="modal__content__button">
            <button onClick={() => setUid(false)}>Понятно</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

const currency = [
  {
    id: 1,
    name: "RUB",
    img: rub,
  },
  {
    id: 2,
    name: "KZT",
    img: kzt,
  },
  {
    id: 3,
    name: "USD",
    img: usd,
  },
];

const pay_system = [
  {
    id: 1,
    name: "VISA",
    img: visa,
  },
  {
    id: 2,
    name: "QIWI",
    img: qiwi,
  },
  {
    id: 3,
    name: "VISA2",
    img: visa,
  },
  {
    id: 4,
    name: "QIWI2",
    img: qiwi,
  },
];
