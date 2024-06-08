import React, { useState } from "react";
import "./faq.css";
import { FaComments } from "react-icons/fa";
import { CgCircleci } from "react-icons/cg";
import { PiCreditCardFill } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { MdKeyboardArrowUp as Up } from "react-icons/md";
import { MdKeyboardArrowDown as Dw } from "react-icons/md";

export const Faq = () => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(null);
  const handleSelect = (index) => setSelected(index);

  return (
    <div className="faq">
      <h1>Документы</h1>
      <div className="faq__header">
        {header.map((item, index) => {
          return (
            <div
              key={index}
              className={selected === index ? "active" : ""}
              onClick={() => handleSelect(index)}
            >
              {item.icon}
              <p>{item.title}</p>
              <img src={require("./bg.png")} alt="" />
            </div>
          );
        })}
      </div>

      <ol className="faq__content">
        {data?.map((item, index) => {
          const isActive = open === index;
          return (
            <li
              key={index}
              onClick={() => setOpen(isActive ? null : index)}
              className={"faq__item" + (isActive ? " active" : "")}
            >
              <button>
                <span>{item.title}</span>
                {isActive ? <Up /> : <Dw />}
              </button>

              <div className={isActive ? "active" : ""}>
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const header = [
  {
    icon: <FaComments />,
    title: "Информация о вашем Steam",
  },
  {
    icon: <CgCircleci />,
    title: "Финансовые вопросы",
  },
  {
    icon: <PiCreditCardFill />,
    title: "Вопросы по работе сервиса",
  },
  {
    icon: <IoGameController />,
    title: "Деньги на баланс Steam",
  },
];

const data = [
  {
    title: "У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт",
    content: `Для пополнения нам приходится конвертировать средства в разные валюты. Иногда сумма может отличаться на 1-5% от указанной.`,
  },
  {
    title: "Какие у вас гарантии?",
    content: `Мы работаем с 2017 года и за это время ни разу не обманули клиентов. Мы гарантируем, что ваши деньги не пропадут.`,
  },
  {
    title: "Какие у вас гарантии?",
    content: `Мы работаем с 2017 года и за это время ни разу не обманули клиентов. Мы гарантируем, что ваши деньги не пропадут.`,
  },
  {
    title: "Какие у вас гарантии?",
    content: `Мы работаем с 2017 года и за это время ни разу не обманули клиентов. Мы гарантируем, что ваши деньги не пропадут.`,
  },
];
