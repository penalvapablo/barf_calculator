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
        className="relative mx-auto mt-6 rounded-2xl  bg-five px-9 py-4 font-text text-xl text-four"
        onClick={modalFn}
      >
        Ver detalle de cada <br /> ingrediente
      </button>
      {modal && (
        <>
          <div
            onClick={modalFn}
            className="bg-black/50 fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%]  translate-y-[-50%]"
          >
            <div className="bg-yellow-200 fixed left-1/2 top-1/2 z-50  w-[80%] translate-x-[-50%] translate-y-[-50%] px-4 py-6">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute right-[-12px] top-[-12px] z-10 h-8 rounded-full bg-two text-four "
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
