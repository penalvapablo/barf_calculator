import React, { useState } from "react";
import type { DogResult, CatResult, PetData } from "../../utils/types";
import { dogCalculator } from "../../utils/dogCalculator";
import { catCalculator } from "../../utils/catCalculator";
import CalculatorResult from "./CalculatorResult";

const CalculatorForm = () => {
  const [petData, setPetData] = useState<PetData>({
    type: "dog",
    name: "",
    age: "adult",
    months: 0,
    weight: 0,
    state: "nutered",
  });

  const [dogResult, setDogResult] = useState<DogResult>({
    name: "",
    total: 0,
    bone: 0,
    fiber: 0,
    meat: 0,
    viscera: 0,
    liver: 0,
  });
  const [catResult, setCatResult] = useState<CatResult>({
    name: "",
    total: 0,
    bone: 0,
    fiber: "",
    heart: 0,
    meat: 0,
    viscera: 0,
    liver: 0,
  });

  // TODO Accesibilidad  Asegúrate de que tu formulario sea accesible para todas las personas, incluidas aquellas que utilizan lectores de pantalla. Esto implica agregar atributos aria-label y aria-invalid en los campos que tienen errores, entre otras consideraciones.
  // TODO Manejo de Errores: Actualmente, estás mostrando un mensaje de error en la parte inferior del formulario cuando se produce un error. Esto es útil, pero sería aún mejor si pudieras resaltar los campos específicos que tienen errores y proporcionar mensajes de error junto a esos campos.
  // TODO Usabilidad y Experiencia del Usuario (UX): Puedes mejorar la experiencia del usuario agregando más información y validaciones en tiempo real. Por ejemplo, podrías mostrar un mensaje de error inmediato cuando el usuario ingrese un valor incorrecto en el campo "Peso" o "Años/Meses". Esto proporcionaría retroalimentación inmediata al usuario en lugar de esperar a que se envíe el formulario.
  // TODO const faltan campos validación

  const [weightErrorMessage, setWeightErrorMessage] = useState<string>("");
  const [monthsErrorMessage, setMonthsErrorMessage] = useState<string>("");

  const isMonthFieldDisabled = petData.age !== "puppy";

  const weightOptions = [];
  for (let i = 0.5; i <= 100; i += 0.5) {
    const grams = i * 1000; // Convierte kg a gramos
    weightOptions.push(
      <option key={grams} value={grams}>
        {i} kg
      </option>,
    );
  }

  const handleTypeChange = (selectedType: "dog" | "cat") => {
    setPetData({
      ...petData,
      type: selectedType,
    });
  };

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

  const handleStateChange = (selectedState: "nutered" | "unnutered") => {
    setPetData({
      ...petData,
      state: selectedState,
    });
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newWeight = parseInt(e.target.value, 10);
    console.log(newWeight);
    setPetData({
      ...petData,
      weight: newWeight,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(petData);
    // Aditional validation

    // If it is younger than 1 years old, months field must be filled
    if (petData.age === "puppy" && petData.months === 0) {
      setMonthsErrorMessage(
        "si tiene menos de un año, completa el campo Meses",
      );
      return;
    }
    setMonthsErrorMessage("");

    // Check if weight is filled
    if (petData.weight === 0 || isNaN(petData.weight)) {
      setWeightErrorMessage("agregá el peso");
      return;
    }
    setWeightErrorMessage("");

    if (petData.type === "dog") {
      setCatResult({ ...catResult, total: 0 });
      const food = dogCalculator(petData);
      setDogResult({
        name: petData.name,
        total: food.total,
        bone: food.bone,
        fiber: food.fiber,
        meat: food.meat,
        viscera: food.viscera,
        liver: food.liver,
      });
    }

    if (petData.type === "cat") {
      setDogResult({ ...dogResult, total: 0 });
      const food = catCalculator(petData);
      setCatResult({
        name: petData.name,
        total: food.total,
        bone: food.bone,
        fiber: food.fiber,
        meat: food.meat,
        heart: food.heart,
        viscera: food.viscera,
        liver: food.liver,
      });
    }
  };

  return (
    <>
      <h1 className="text-center font-title text-5xl leading-[3.4rem] text-one">
        Calculadora Barf
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col  gap-8 py-8 font-title text-xl text-one "
      >
        <div className="flex items-end justify-between">
          <div className="flex w-[50%] flex-col ">
            <div className=" rounded-2xl bg-four p-1 text-base">
              <button
                type="button"
                onClick={() => handleTypeChange("dog")}
                className={`w-[50%] rounded-xl p-1 text-center ${
                  petData.type === "dog" ? "bg-three" : ""
                }`}
              >
                Perro
              </button>
              <button
                type="button"
                onClick={() => handleTypeChange("cat")}
                className={`w-[50%] rounded-xl p-1 text-center ${
                  petData.type === "cat" ? "bg-three" : ""
                }`}
              >
                Gato
              </button>
            </div>
          </div>
          <label className="flex w-[45%]  flex-col gap-3">
            Nombre:
            <input
              required
              className="w-full rounded-2xl p-2 font-text text-base focus:outline-none focus:ring-2 focus:ring-five"
              type="text"
              maxLength={10}
              id="name"
              onChange={handleNameChange}
            />
          </label>
        </div>
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
            <select
              className="h-10 rounded-2xl p-2  font-mono text-base focus:outline-none focus:ring-2 focus:ring-five"
              name="weight"
              id="weight"
              onChange={handleWeightChange}
            >
              {weightOptions}
            </select>
          </label>
        </div>
        {weightErrorMessage && (
          <p className="py-2 pr-2 text-center">{weightErrorMessage}</p>
        )}
        {monthsErrorMessage && (
          <p className="py-2 pr-2 text-center">{monthsErrorMessage}</p>
        )}

        <button
          type="submit"
          className=" mx-auto  rounded-2xl  bg-five px-9 py-4 font-text text-xl text-four"
        >
          Calcular
        </button>
      </form>
      <CalculatorResult catResult={catResult} dogResult={dogResult} />
    </>
  );
};

export default CalculatorForm;
