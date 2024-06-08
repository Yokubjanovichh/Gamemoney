import React, { memo, useRef } from "react";
import "./error.css";
import { Mousedown } from "../../utility/mousedown";

export const Error = memo((props) => {
  const { title, message } = props;
  const modalRef = useRef(null);

  <Mousedown modalRef={modalRef} onClose={() => console.log("Close")} />;

  return (
    <div className="modal active">
      <div className="modal__error__box" ref={modalRef}>
        <h3>{title || "Ошибка"}</h3>
        <p>
          {message ||
            "Что-то пошло не так. Попробуйте позже или обратитесь в службу поддержки."}
        </p>
        <button>Понятно</button>
      </div>
    </div>
  );
});
