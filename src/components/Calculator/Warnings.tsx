import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Warnings = () => {
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
        ¡Leer antes de usar!
      </button>
      {modal && (
        <>
          <div
            onClick={modalFn}
            className="fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%]  bg-one/50"
          >
            <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-[22.5rem] translate-x-[-50%]  translate-y-[-50%] rounded-2xl bg-two px-4 py-6 font-text text-base text-one">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute right-[-12px] top-[-12px] z-10 h-8 rounded-full bg-two text-one "
              />
              <p>
                - Esta calculadora es para perros sanos con una condición
                corporal correcta.
              </p>
              <br />
              <p>
                - Presta atención a la salud y el bienestar de tu mascota. Si
                notas cambios negativos, busca atención veterinaria de
                inmediato.
              </p>
              <br />
              <p>
                - Cambiar a la Dieta BARF debe hacerse de manera gradual para
                evitar problemas digestivos. Mezcla alimentos crudos con la
                dieta actual y aumenta la proporción con el tiempo.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Warnings;
