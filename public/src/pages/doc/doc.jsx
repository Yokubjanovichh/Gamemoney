import React, { useState } from "react";
import "./doc.css";
import { FaClipboardList, FaBuildingColumns } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Doc = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const page = new URLSearchParams(window.location.search).get("page");

  React.useEffect(() => {
    switch (page) {
      case "requisites":
        return setActive(0);
      case "public-offer":
        return setActive(1);
      case "privacy-policy":
        return setActive(2);
      default:
        return setActive(0);
    }
  }, [page]);

  const handleClick = (index, query) => {
    setActive(index);
    return navigate(`/doc?page=${query}`);
  };

  return (
    <div className="docs">
      <h1>Документы</h1>

      <div className="docs__header">
        {header.map((item, index) => {
          const activ = index === active ? "active" : "";
          return (
            <div
              key={item.id}
              onClick={() => handleClick(index, item.query)}
              className={`docs__header-item ${activ}`}
            >
              {item.icon}
              <p>{item.title}</p>
              <img src={require("./bg.png")} alt="bg" />
            </div>
          );
        })}
      </div>

      <ol className="docs__content">
        <li>
          <h3>1.Введение</h3>

          <p>
            1.1 Используя и / или посещая любой раздел веб-сайта; или открывая
            учетную запись на Сайте, вы соглашаетесь соблюдать Политику
            конфиденциальности. В настоящей Политике конфиденциальности
            описывается, как мы собираем, используем, обрабатываем и раскрываем
            вашу информацию, включая личную информацию, в связи с вашим доступом
            к этому Веб-сайту и его использованием. «Контроллер данных» - это
            компания, которая определяет цели и средства обработки персональных
            данных в соответствии с настоящей Политикой конфиденциальности.
            ITSFAIL LTD действует в качестве контроллера данных в соответствии с
            Регламентом ЕС 2016/679, определяющим цели и средства обработки
            ваших личных данных. При использовании платежных услуг вы также
            будете предоставлять свою информацию, включая личную информацию,
            компании ITSFAIL LTD , регистрационный номер 13246765,
            зарегистрированной по адресу: 16 John Nicholas Crescent, Ellesmere
            Port, Cheshire, United Kingdom, CH65 2DL.
          </p>

          <p>
            1.2 Используя и / или посещая любой раздел веб-сайта; или открывая
            учетную запись на Сайте, вы соглашаетесь соблюдать Политику
            конфиденциальности. В настоящей Политике конфиденциальности
            описывается, как мы собираем, используем, обрабатываем и раскрываем
            вашу информацию, включая личную информацию, в связи с вашим доступом
            к этому Веб-сайту и его использованием. «Контроллер данных» - это
            компания, которая определяет цели и средства обработки персональных
            данных в соответствии с настоящей Политикой конфиденциальности.
          </p>
        </li>

        <li>
          <h3>Информация, которую мы собираем</h3>
          <p>
            1.1 Используя и / или посещая любой раздел веб-сайта; или открывая
            учетную запись на Сайте, вы соглашаетесь соблюдать Политику
            конфиденциальности. В настоящей Политике конфиденциальности
            описывается, как мы собираем, используем, обрабатываем и раскрываем
            вашу информацию, включая личную информацию, в связи с вашим доступом
            к этому Веб-сайту и его использованием. «Контроллер данных» - это
            компания, которая определяет цели и средства обработки персональных
            данных в соответствии с настоящей Политикой конфиденциальности.
            ITSFAIL LTD действует в качестве контроллера данных в соответствии с
            Регламентом ЕС 2016/679, определяющим цели и средства обработки
            ваших личных данных. При использовании платежных услуг вы также
            будете предоставлять свою информацию, включая личную информацию,
            компании ITSFAIL LTD , регистрационный номер 13246765,
            зарегистрированной по адресу: 16 John Nicholas Crescent, Ellesmere
            Port, Cheshire, United Kingdom, CH65 2DL.
          </p>
        </li>
      </ol>
    </div>
  );
};

const header = [
  {
    id: 1,
    title: "Политика конфидециальности",
    icon: <FaClipboardList />,
    query: "requisites",
  },
  {
    id: 2,
    title: "Публичная оферта",
    icon: <RiShieldCheckFill />,
    query: "public-offer",
  },
  {
    id: 3,
    title: "Реквизиты",
    icon: <FaBuildingColumns />,
    query: "privacy-policy",
  },
];
