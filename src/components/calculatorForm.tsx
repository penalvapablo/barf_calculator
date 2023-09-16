import React, { useState } from "react";
import type { Food, PetData } from "../utils/types";
import { BarfCalulator } from "../utils/calculator";

const CalculatorForm = () => {
  const [petData, setPetData] = useState<PetData>({
    name: "",
    age: "adult",
    months: 0,
    weight: 0,
    state: "nutered",
  });

  const [result, setResult] = useState<Food>();

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

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    if (selectedState === "nutered" || selectedState === "unnutered") {
      setPetData({
        ...petData,
        state: selectedState,
      });
    }
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
    });
    console.log(food);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center gap-5 px-3 py-8  text-xl"
    >
      <label className="flex items-center gap-4">
        Nombre:
        <input
          required
          className="p-2"
          type="text"
          id="name"
          onChange={handleNameChange}
        />
      </label>
      <div className="mx-auto h-1 w-[80%] bg-black"></div>
      <p>Edad (puede ser aproximada)</p>
      <label className="flex items-center gap-4">
        Años:
        {/* <input
            className="p-2"
            type="number"
            id="age"
            onChange={handleAgeChange}
          /> */}
        <select name="age" id="age" onChange={handleAgeChange}>
          <option value="puppy">menos de 1 año</option>
          <option value="adult" selected>
            entre 1 y 10 años
          </option>
          <option value="senior">mas de 10 años</option>
        </select>
      </label>
      <label className="flex items-center gap-4">
        Meses:
        {/* <input
            className="p-2"
            type="number"
            id="months"
            max={12}
            onChange={handleMonthsChange}
          /> */}
        <select
          name="months"
          id="months"
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
        <p className="py-2 text-center text-red-500">{ageErrorMessage}</p>
      )}
      <div className="mx-auto h-1 w-[80%] bg-black"></div>
      <label className="flex items-center gap-4">
        Peso (kg):
        <input
          className="p-2"
          type="number"
          id="weight"
          min={1}
          onChange={handleWeightChange}
        />
      </label>
      {weightErrorMessage && (
        <p className="py-2 text-center text-red-500">{weightErrorMessage}</p>
      )}
      <div className="mx-auto h-1 w-[80%] bg-black"></div>
      <label className="flex items-center gap-4">
        Estado:
        <select id="state" onChange={handleStateChange}>
          <option value="nutered">Castrado</option>
          <option value="unnutered">No Castrado</option>
        </select>
      </label>
      <div className="mx-auto h-1 w-[80%] bg-black"></div>
      <button type="submit" className="bg-red-300 p-3">
        Calcular
      </button>

      {result && (
        <div className="flex flex-col gap-2 text-2xl text-amber-600">
          <p className="">
            {petData.name} debe comer {result.total}gr de alimento diario
            dividos en:
          </p>
          <p className="">huesos carnosos: {result.bone}gr</p>
          <p className="">carne: {result.meat}gr </p>
          <p className="">viscera: {result.viscera}gr</p>
          <p className="">fiber: {result.fiber}gr</p>
        </div>
      )}
    </form>
  );
};

export default CalculatorForm;
