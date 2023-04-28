import React, { useEffect, useState } from 'react'

const Reloj = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const optionsFecha = { day: 'numeric', month: 'long', year: 'numeric' };
      const optionsHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, locale: 'es' };
      setFecha(date.toLocaleDateString('es-ES', optionsFecha));
      setHora(date.toLocaleTimeString('es-ES', optionsHora));
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div>
        <h1 className="text-4xl text-gray-100 font-extrabold mb-2">DeliveryFood</h1>
        <p className="text-gray-400 text-lg">{fecha}</p>
        <p className="text-gray-400 text-lg">{hora}</p>
      </div>
    </>
  )
}

export default Reloj
