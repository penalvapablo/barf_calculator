import React, { useState } from "react";

function OrganizerForm() {
  const [eventOptions, setEventOptions] = useState(["", "", "", "", ""]); // Inicialmente, 5 opciones vacías
  const [eventUrl, setEventUrl] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...eventOptions];
    updatedOptions[index] = value;
    setEventOptions(updatedOptions);
  };

  const generateEventUrl = () => {
    // Generar una URL con las opciones propuestas (podría ser codificada como parámetros de consulta)
    const optionsQueryParam = eventOptions
      .map((option) => encodeURIComponent(option))
      .join("&");
    const generatedUrl = `${window.location.origin}/event?options=${optionsQueryParam}`;
    setEventUrl(generatedUrl);
  };

  return (
    <div>
      <h2>Proporciona opciones para el evento:</h2>
      <form>
        {eventOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Opción ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={generateEventUrl}>
          Generar URL del evento
        </button>
      </form>
      {eventUrl && (
        <div>
          <p>URL del evento generada:</p>
          <a href={eventUrl} target="_blank" rel="noopener noreferrer">
            {eventUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default OrganizerForm;
