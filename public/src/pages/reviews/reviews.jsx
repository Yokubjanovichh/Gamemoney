import React from "react";
import "./reviews.css";
import { AiFillLike, AiFillDislike, AiFillMessage } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";

export const Reviews = () => {
  const { like, dislike } = steps(274, 12);

  return (
    <div className="reviews">
      <h1>Отзывы пользователей</h1>

      <ol className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__item-header">
            <figure>
              <img src="https://via.placeholder.com/40" alt="user" />

              <figcaption>
                <h2>Username</h2>
                <p>Пополнил(а) на 400Р через Банковскую карту</p>
              </figcaption>
            </figure>

            <p>15.02.2024</p>

            <button>
              <span>Рукомендует</span>
              {true ? <AiFillLike /> : <AiFillDislike />}
            </button>
          </div>

          <p>
            Хороший сайт, деньги приходят моментально. Были проблемы с
            пополнением, но техническая поддержка быстро решила вопрос пополнял
            не один раз!
          </p>

          <div className="reviews__item-footer">
            <p>
              <IoWallet />
              <span>4 пополнения</span>
            </p>

            <p>
              <AiFillMessage />
              <span>1 отзыв</span>
            </p>
          </div>
        </li>
        <li className="reviews__item">
          <div className="reviews__item-header">
            <figure>
              <img src="https://via.placeholder.com/40" alt="user" />

              <figcaption>
                <h2>Username</h2>
                <p>Пополнил(а) на 400Р через Банковскую карту</p>
              </figcaption>
            </figure>

            <p>15.02.2024</p>

            <button>
              <span>Рукомендует</span>
              {true ? <AiFillLike /> : <AiFillDislike />}
            </button>
          </div>

          <p>
            Хороший сайт, деньги приходят моментально. Были проблемы с
            пополнением, но техническая поддержка быстро решила вопрос пополнял
            не один раз!
          </p>

          <div className="reviews__item-footer">
            <p>
              <IoWallet />
              <span>4 пополнения</span>
            </p>

            <p>
              <AiFillMessage />
              <span>1 отзыв</span>
            </p>
          </div>
        </li>
        <li className="reviews__item">
          <div className="reviews__item-header">
            <figure>
              <img src="https://via.placeholder.com/40" alt="user" />

              <figcaption>
                <h2>Username</h2>
                <p>Пополнил(а) на 400Р через Банковскую карту</p>
              </figcaption>
            </figure>

            <p>15.02.2024</p>

            <button>
              <span>Рукомендует</span>
              {true ? <AiFillLike /> : <AiFillDislike />}
            </button>
          </div>

          <p>
            Хороший сайт, деньги приходят моментально. Были проблемы с
            пополнением, но техническая поддержка быстро решила вопрос пополнял
            не один раз!
          </p>

          <div className="reviews__item-footer">
            <p>
              <IoWallet />
              <span>4 пополнения</span>
            </p>

            <p>
              <AiFillMessage />
              <span>1 отзыв</span>
            </p>
          </div>
        </li>
        <li className="reviews__item">
          <div className="reviews__item-header">
            <figure>
              <img src="https://via.placeholder.com/40" alt="user" />

              <figcaption>
                <h2>Username</h2>
                <p>Пополнил(а) на 400Р через Банковскую карту</p>
              </figcaption>
            </figure>

            <p>15.02.2024</p>

            <button>
              <span>Рукомендует</span>
              {true ? <AiFillLike /> : <AiFillDislike />}
            </button>
          </div>

          <p>
            Хороший сайт, деньги приходят моментально. Были проблемы с
            пополнением, но техническая поддержка быстро решила вопрос пополнял
            не один раз!
          </p>

          <div className="reviews__item-footer">
            <p>
              <IoWallet />
              <span>4 пополнения</span>
            </p>

            <p>
              <AiFillMessage />
              <span>1 отзыв</span>
            </p>
          </div>
        </li>
        <li className="reviews__item">
          <div className="reviews__item-header">
            <figure>
              <img src="https://via.placeholder.com/40" alt="user" />

              <figcaption>
                <h2>Username</h2>
                <p>Пополнил(а) на 400Р через Банковскую карту</p>
              </figcaption>
            </figure>

            <p>15.02.2024</p>

            <button>
              <span>Рукомендует</span>
              {true ? <AiFillLike /> : <AiFillDislike />}
            </button>
          </div>

          <p>
            Хороший сайт, деньги приходят моментально. Были проблемы с
            пополнением, но техническая поддержка быстро решила вопрос пополнял
            не один раз!
          </p>

          <div className="reviews__item-footer">
            <p>
              <IoWallet />
              <span>4 пополнения</span>
            </p>

            <p>
              <AiFillMessage />
              <span>1 отзыв</span>
            </p>
          </div>
        </li>
      </ol>

      <div className="reviews__actions">
        <h1>Отзывы пользователей</h1>
        <div className="review__right__likes">
          <div className="review__right__likes__actions">
            <p>
              <AiFillLike />
              <span>274</span>
            </p>
            <span></span>
            <p>
              <AiFillDislike />
              <span>12</span>
            </p>
          </div>

          <div className="review__right__likes__progress">
            <span style={{ width: `${like}%` }}></span>
            <span style={{ width: `${dislike}%` }}></span>
          </div>

          <p>
            <i>94%</i>
            <span>пользователей довольны работоспособностью сервиса</span>
          </p>
          <img src={require("./bg.png")} alt="" />
        </div>

        <div className="review__right__filter">
          <p>
            <LuSettings2 />
            <span>Фильтр</span>
          </p>

          <strong></strong>

          <div className="review__right__filter__checkbox">
            <label>
              <input type="radio" name="select" hidden defaultChecked />
              <IoMdCheckmark />
              <span></span>
            </label>

            <p>
              <AiFillMessage />
              <span>Все</span>
            </p>
          </div>

          <div className="review__right__filter__checkbox">
            <label>
              <input type="radio" name="select" hidden />
              <IoMdCheckmark />
              <span></span>
            </label>

            <p>
              <AiFillLike />
              <span>Положительные</span>
            </p>
          </div>

          <div className="review__right__filter__checkbox">
            <label>
              <input type="radio" name="select" hidden />
              <IoMdCheckmark />
              <span></span>
            </label>

            <p>
              <AiFillDislike />
              <span>Отрицательные</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function steps(likes, dislikes) {
  // get procent of likes
  const like = (likes / (likes + dislikes)) * 100;
  const dislike = (dislikes / (likes + dislikes)) * 100;
  return { like, dislike };
}
