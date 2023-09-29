import React, { useState } from "react";

function AvailabilityForm({ options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      // Si la opción ya está seleccionada, la eliminamos de las seleccionadas.
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Si la opción no está seleccionada, la agregamos a las seleccionadas.
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir el objeto de respuesta en formato JSON
    const response = { availability: selectedOptions };

    // Realizar una solicitud HTTP POST a la serverless function
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response),
    };

    try {
      const response = await fetch(
        "URL_DE_TU_SERVERLESS_FUNCTION",
        requestOptions,
      );
      if (response.ok) {
        // La respuesta se envió correctamente, puedes mostrar un mensaje de confirmación al usuario
        console.log("Respuesta enviada exitosamente");
      } else {
        console.error("Error al enviar la respuesta");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div>
      <h2>Selecciona tus opciones de disponibilidad:</h2>
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
        <button type="submit">Enviar respuesta</button>
      </form>
    </div>
  );
}

export default AvailabilityForm;
