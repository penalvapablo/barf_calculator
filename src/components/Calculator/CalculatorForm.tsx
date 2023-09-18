import React, { useState } from "react";
import type { Food, PetData } from "../../utils/types";
import { BarfCalulator } from "../../utils/calculator";
import FoodDetails from "./FoodDetails";

const CalculatorForm = () => {
  const [petData, setPetData] = useState<PetData>({
    name: "",
    age: "adult",
    months: 0,
    weight: 0,
    state: "nutered",
  });

  const [result, setResult] = useState<Food>({
    total: 0,
    bone: 0,
    fiber: 0,
    meat: 0,
    viscera: 0,
    liver: 0,
  });

  // TODO Accesibilidad  Asegúrate de que tu formulario sea accesible para todas las personas, incluidas aquellas que utilizan lectores de pantalla. Esto implica agregar atributos aria-label y aria-invalid en los campos que tienen errores, entre otras consideraciones.
  // TODO Manejo de Errores: Actualmente, estás mostrando un mensaje de error en la parte inferior del formulario cuando se produce un error. Esto es útil, pero sería aún mejor si pudieras resaltar los campos específicos que tienen errores y proporcionar mensajes de error junto a esos campos.
  // TODO Usabilidad y Experiencia del Usuario (UX): Puedes mejorar la experiencia del usuario agregando más información y validaciones en tiempo real. Por ejemplo, podrías mostrar un mensaje de error inmediato cuando el usuario ingrese un valor incorrecto en el campo "Peso" o "Años/Meses". Esto proporcionaría retroalimentación inmediata al usuario en lugar de esperar a que se envíe el formulario.

  // TODO const faltan campos validación
  const [ageErrorMessage, setAgeErrorMessage] = useState<string>("");
  const [weightErrorMessage, setWeightErrorMessage] = useState<string>("");

  const isMonthFieldDisabled = petData.age !== "puppy";

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setPetData({
      ...petData,
      name: newName,
    });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAge = e.target.value; // Parsea la entrada como número
    if (newAge === "puppy" || newAge === "adult" || newAge === "senior") {
      setPetData({
        ...petData,
        age: newAge,
      });
    }
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonths = parseInt(e.target.value, 10); // Parsea la entrada como número
    setPetData({
      ...petData,
      months: newMonths,
    });
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseFloat(e.target.value); // Parsea la entrada como número decimal
    setPetData({
      ...petData,
      weight: newWeight,
    });
  };

  const handleStateChange = (selectedState: "nutered" | "unnutered") => {
    setPetData({
      ...petData,
      state: selectedState,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(petData);
    // Aditional validation
    if (petData.age === "puppy" && petData.months === 0) {
      setAgeErrorMessage("¿cuántos meses tiene?");
      return;
    }

    setAgeErrorMessage("");
    if (petData.weight === 0 || isNaN(petData.weight)) {
      setWeightErrorMessage("agregá el peso");
      return;
    }
    setWeightErrorMessage("");

    const food = BarfCalulator(petData);
    setResult({
      total: food.total,
      bone: food.bone,
      fiber: food.fiber,
      meat: food.meat,
      viscera: food.viscera,
      liver: food.liver,
    });
    console.log(food);
  };

  const copyToClipboard = () => {
    const textToCopy = `${petData.name} debe comer ${result.total}gr de alimento diario divididos en:\n► huesos carnosos: ${result.bone}gr\n► carne: ${result.meat}gr\n► hígado: ${result.liver}gr\n► vísceras: ${result.viscera}gr\n► frutas y verduras: ${result.fiber}gr`;

    // Crea un elemento de textarea invisible para copiar el texto
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    // Selecciona y copia el texto
    textArea.select();
    document.execCommand("copy");

    // Limpia y elimina el elemento de textarea
    document.body.removeChild(textArea);

    // Puedes mostrar una notificación o realizar cualquier otra acción aquí
    alert("El contenido ha sido copiado al portapapeles.");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col  gap-8 py-8 font-title text-xl text-one "
    >
      <label className="items-center">
        Nombre:
        <input
          required
          className="mt-3 h-10 w-full rounded-2xl p-2 font-text text-base focus:outline-none focus:ring-2 focus:ring-five"
          type="text"
          id="name"
          onChange={handleNameChange}
        />
      </label>
      <div className="flex justify-between">
        <label className="flex w-[50%] flex-col gap-3">
          Edad:
          <select
            className="h-10 rounded-2xl  py-2 pl-2 font-text text-base focus:outline-none focus:ring-2 focus:ring-five"
            name="age"
            id="age"
            defaultValue="adult"
            onChange={handleAgeChange}
          >
            <option value="puppy">menos de 1 año</option>
            <option value="adult">entre 1 y 10 años</option>
            <option value="senior">mas de 10 años</option>
          </select>
        </label>
        <label className="flex w-[45%]  flex-col gap-3">
          Meses:
          <select
            name="months"
            id="months"
            className="h-10 rounded-2xl p-2  font-text text-base focus:outline-none focus:ring-2 focus:ring-five"
            onChange={handleMonthsChange}
            disabled={isMonthFieldDisabled}
          >
            <option value=""></option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>

        {ageErrorMessage && (
          <p className="text-red-500 py-2 text-center">{ageErrorMessage}</p>
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex w-[50%] flex-col gap-3">
          Castrado:
          <div className=" rounded-2xl bg-four p-1 text-base">
            <button
              type="button"
              onClick={() => handleStateChange("nutered")}
              className={`w-[50%] rounded-xl p-1 text-center ${
                petData.state === "nutered" ? "bg-three" : ""
              }`}
            >
              Si
            </button>
            <button
              type="button"
              onClick={() => handleStateChange("unnutered")}
              className={`w-[50%] rounded-xl p-1 text-center ${
                petData.state === "unnutered" ? "bg-three" : ""
              }`}
            >
              No
            </button>
          </div>
        </div>
        <label className=" flex w-[45%]  flex-col gap-3">
          Peso (kg):
          <input
            className="h-10 rounded-2xl p-2  font-text text-base focus:outline-none focus:ring-2 focus:ring-five"
            type="number"
            id="weight"
            min={1}
            onChange={handleWeightChange}
          />
        </label>

        {weightErrorMessage && (
          <p className="text-red-500 py-2 text-center">{weightErrorMessage}</p>
        )}
      </div>
      <button
        type="submit"
        className="relative mx-auto mt-6 rounded-2xl  bg-five px-9 py-4 font-text text-xl text-four"
      >
        Calcular
      </button>

      {result && (
        <>
          <div className="text-amber-600 flex flex-col gap-2 text-lg">
            <p className="">
              {petData.name} debe comer {result.total}gr de alimento diario
              dividos en:
            </p>
            <p className="">► huesos carnosos: {result.bone}gr</p>
            <p className="">► carne: {result.meat}gr </p>
            <p className="">► hígado: {result.liver}gr </p>
            <p className="">► vísceras: {result.viscera}gr</p>
            <p className="">► frutas y verduras: {result.fiber}gr</p>
            <button
              onClick={copyToClipboard}
              className="w-fit rounded-2xl  bg-five px-4 py-2 font-text text-xl text-four"
            >
              Copiar
            </button>
          </div>

          <FoodDetails />
        </>
      )}
    </form>
  );
};

export default CalculatorForm;
