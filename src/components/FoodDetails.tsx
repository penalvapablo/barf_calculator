import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const FoodDetails = () => {
  const [modal, setModal] = useState(false);

  const modalFn = () => {
    setModal(!modal);
    if (typeof window !== "undefined") {
      !modal
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  };

  return (
    <>
      <button
        aria-label="leer advertencias"
        className="relative mx-auto mt-4 block bg-slate-50 px-9 py-4 text-2xl"
        onClick={modalFn}
      >
        Ver detalle de cada ingrediente
      </button>
      {modal && (
        <>
          <div
            onClick={modalFn}
            className="fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%]  bg-black/50"
          >
            <div className="fixed left-1/2 top-1/2 z-50 w-[80%]  translate-x-[-50%] translate-y-[-50%] bg-yellow-200 px-4 py-6">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="bg-two text-four absolute right-[-12px] top-[-12px] z-10 h-8 rounded-full "
              />
              <p>- Huesos carnoso: patamuslo, etc</p>
              <p>- Carne: pechuga, bondiola, etc</p>
              <p>- Otras visceras: riñon, etc</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FoodDetails;
