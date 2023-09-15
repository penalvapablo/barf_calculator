import React, { useState } from "react";
import type { Food, PetData } from "../utils/types";
import { BarfCalulator } from "../utils/calculator";

const CalculatorForm = () => {
  const [petData, setPetData] = useState<PetData>({
    name: "",
    age: 0,
    months: 0,
    weight: 0,
    state: "nutered",
  });

  const [result, setResult] = useState<Food>();

  // TODO Accesibilidad  Asegúrate de que tu formulario sea accesible para todas las personas, incluidas aquellas que utilizan lectores de pantalla. Esto implica agregar atributos aria-label y aria-invalid en los campos que tienen errores, entre otras consideraciones.
  // TODO Manejo de Errores: Actualmente, estás mostrando un mensaje de error en la parte inferior del formulario cuando se produce un error. Esto es útil, pero sería aún mejor si pudieras resaltar los campos específicos que tienen errores y proporcionar mensajes de error junto a esos campos.
  // TODO Usabilidad y Experiencia del Usuario (UX): Puedes mejorar la experiencia del usuario agregando más información y validaciones en tiempo real. Por ejemplo, podrías mostrar un mensaje de error inmediato cuando el usuario ingrese un valor incorrecto en el campo "Peso" o "Años/Meses". Esto proporcionaría retroalimentación inmediata al usuario en lugar de esperar a que se envíe el formulario.

  // TODO const faltan campos validación
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setPetData({
      ...petData,
      name: newName,
    });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = parseInt(e.target.value, 10); // Parsea la entrada como número
    setPetData({
      ...petData,
      age: newAge,
    });
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (petData.age === 0 && petData.months === 0) {
      setErrorMessage("corregí la edad");
      return;
    }
    if (petData.weight === 0) {
      setErrorMessage("corregí el peso");
      return;
    }
    setErrorMessage("");
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
    <div className="bg-purple-200 px-6  py-6">
      <h2 className="pt-10   text-center text-2xl">Calculadora BARF</h2>
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
        <p>Edad (puede ser aproximada)</p>
        <label className="flex items-center gap-4">
          Años:
          <input
            className="p-2"
            required
            type="number"
            id="age"
            onChange={handleAgeChange}
          />
        </label>
        <label className="flex items-center gap-4">
          Meses:
          <input
            required
            className="p-2"
            type="number"
            id="months"
            max={12}
            min={2}
            onChange={handleMonthsChange}
          />
        </label>
        <label className="flex items-center gap-4">
          Peso (kg):
          <input
            required
            className="p-2"
            type="number"
            id="weight"
            min={1}
            onChange={handleWeightChange}
          />
        </label>
        <label className="flex items-center gap-4">
          Estado:
          <select id="state" onChange={handleStateChange}>
            <option value="nutered">Castrado</option>
            <option value="unnutered">No Castrado</option>
          </select>
        </label>
        <button type="submit" className="bg-red-300 p-3">
          Calcular
        </button>
      </form>
      {errorMessage && (
        <p className="py-20 text-center text-red-500">{errorMessage}</p>
      )}
      {result && (
        <div className="flex flex-col gap-2 text-2xl">
          <p className="text-amber-600">
            {petData.name} debe comer {result.total}gr de alimento diarios
            dividos en:
          </p>
          <p className="text-amber-600">huesos carnosos: {result.bone}gr</p>
          <p className="text-amber-600">carne: {result.meat}gr </p>
          <p className="text-amber-600">viscera: {result.viscera}gr</p>
          <p className="text-amber-600">fiber: {result.fiber}gr</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
