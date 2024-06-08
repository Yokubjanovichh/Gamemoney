import React, { memo, useState } from "react";
import "./commission.css";

export const Commission = memo(() => {
  const [active, setActive] = useState(0);
  const percent = [0, -2, -4, -6, -8];
  const price = [200, 1000, 2500, 5000, 10000];

  const changeActive = (index) => {
    setActive(index);
  };

  return (
    <div className="commission">
      <div className="commission__percent">
        {percent.map((item, index) => {
          return (
            <p
              key={index}
              className={index === active ? "active" : ""}
              onClick={() => changeActive(index)}
            >
              {item}%
            </p>
          );
        })}
      </div>

      <div className="commission__line">
        {percent.map((item, index) => {
          return (
            <span
              key={index}
              className={index === active ? "active" : ""}
            ></span>
          );
        })}
      </div>

      <div className="commission__price">
        {price.map((item, index) => {
          return (
            <p key={index} className={index === active ? "active" : ""}>
              {item}₽
            </p>
          );
        })}
      </div>
    </div>
  );
});
