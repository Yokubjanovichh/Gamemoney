import React, { memo } from "react";
import "./activity.css";

export const Activity = memo(() => {
  return (
    <div className="activity">
      <div className="activity__header">
        <h3>Активность</h3>
        <p>
          <b>1516</b>
          <span className="live"></span>
        </p>
      </div>
      <ol className="activity__list">
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
        <li>
          <p>06:55</p>
          <strong></strong>
          <b>clock***</b>
          <b>521.71 ₽</b>
        </li>
      </ol>

      <div className="activity__footer">
        <p>
          <span>96 632</span>
          <i>Клиентов</i>
        </p>
        <strong></strong>
        <p>
          <span>290 455</span>
          <i>Пополнений</i>
        </p>
      </div>
    </div>
  );
});
