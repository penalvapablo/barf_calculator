import React from "react";
import { copyToClipboard } from "../../utils/copyToClipboard";
import type { DogResult, CatResult } from "../../utils/types";

type ResultProps = {
  setCatResult: React.Dispatch<React.SetStateAction<CatResult>>;
  setDogResult: React.Dispatch<React.SetStateAction<DogResult>>;
  catResult: CatResult;
  dogResult: DogResult;
};

const Result = ({
  catResult,
  dogResult,
  setCatResult,
  setDogResult,
}: ResultProps) => {
  return (
    <>
      {dogResult.total !== 0 && (
        <>
          <div className="flex flex-col gap-2 pt-3 text-lg text-one">
            <p className="">
              <strong>{dogResult.name}</strong> debe comer {dogResult.total}gr
              de alimento diario dividos en:
            </p>
            <p className="">► huesos carnosos: {dogResult.bone}gr</p>
            <p className="">► carne: {dogResult.meat}gr </p>
            <p className="">► hígado: {dogResult.liver}gr </p>
            <p className="">► vísceras: {dogResult.viscera}gr</p>
            <p className="">► frutas y verduras: {dogResult.fiber}gr</p>
            <button
              type="button"
              onClick={() => {
                copyToClipboard(dogResult, catResult);
              }}
              className="w-fit rounded-2xl  bg-five px-4 py-2 font-text text-xl text-four"
            >
              Copiar
            </button>
          </div>

          <a
            href="#precauciones"
            aria-label="leer advertencias y detalles de ingredientes"
            className="relative mx-auto mt-6 rounded-2xl   text-center font-text text-xl font-bold text-one underline"
          >
            Ver precauciones y detalle de cada ingrediente
          </a>
        </>
      )}

      {catResult.total !== 0 && (
        <>
          <div className="flex flex-col gap-2 pt-3 text-lg text-one">
            <p className="">
              <strong>{catResult.name}</strong> debe comer {catResult.total}gr
              de alimento diario dividos en:
            </p>
            <p className="">► huesos carnosos: {catResult.bone}gr</p>
            <p className="">► carne: {catResult.meat}gr </p>
            <p className="">► corazón: {catResult.heart}gr </p>
            <p className="">► hígado: {catResult.liver}gr </p>
            <p className="">► vísceras: {catResult.viscera}gr</p>
            <p className="">► frutas y verduras: {catResult.fiber}gr</p>
            <div>
              <button
                onClick={() => {
                  copyToClipboard(dogResult, catResult);
                }}
                aria-label="Copiar resultado"
                className="w-fit rounded-2xl  bg-five px-4 py-2 font-text text-xl text-four"
              >
                Copiar
              </button>
              <button
                onClick={() => {
                  setCatResult({ ...catResult, total: 0 });
                  setDogResult({ ...dogResult, total: 0 });
                }}
                aria-label="Volver a calcular"
                className="w-fit rounded-2xl  bg-five px-4 py-2 font-text text-xl text-four"
              >
                Volver a calcular
              </button>
            </div>
          </div>

          <a
            href="#precauciones"
            aria-label="leer advertencias y detalles de ingredientes"
            className="relative mx-auto mt-6 rounded-2xl   text-center font-text text-xl font-bold text-one underline"
          >
            Ver precauciones y detalle de cada ingrediente
          </a>
        </>
      )}
    </>
  );
};

export default Result;
