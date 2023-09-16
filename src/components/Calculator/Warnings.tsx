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
        className="relative mx-auto mt-4 block bg-slate-50 px-9 py-4 text-2xl"
        onClick={modalFn}
      >
        ¡Leer antes de usar!
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
              <p>
                - Esta calculadora está hecha para perros saludables que se
                encuentran su peso. Si tu perro está fuera de su peso, deberías
                consultar a la nutricionista para poder armar un plan específico
              </p>
              <p>
                - Deberías probar un tiempo la dieta y ajustar las cantidades en
                base a la evolución del animal. Hay factores como el nivel de
                actividad, la raza, etc, que pueden variar los resultados.
              </p>
              <p>
                - Si bien utilizar la calculadora es un buen punto de partida
                (¡mas si tu perro come balanceado!) lo ideal sería acesorarte
                con la nutricionista para poder armar un plan específico para tu
                perro
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Warnings;
