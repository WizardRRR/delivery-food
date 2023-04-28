import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import {
  TbMeat,
  TbSalad,
  TbPlant2
} from 'react-icons/tb'

import {
  GiNoodles,
  GiFriedFish
} from 'react-icons/gi'

const Header = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const optionsFecha = { day: 'numeric', month: 'long', year: 'numeric' };
      const optionsHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, locale: 'es' };
      setFecha(date.toLocaleDateString('es-ES', optionsFecha));
      setHora(date.toLocaleTimeString('es-ES', optionsHora));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-4xl text-gray-100 font-extrabold mb-2">DeliveryFood</h1>
          <p className="text-gray-400 text-lg">{fecha}</p>
          <p className="text-gray-400 text-lg">{hora}</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex flex-col md:flex-row items-center justify-between p-2 md:justify-start md:gap-8 border-b mb-6 text-lg ">
        <Link
          className=" flex items-center gap-2 relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-white before:transition hover:before:scale-x-100"
          href="/download"
        >
          <TbMeat />
          Carnes
        </Link>
        <Link
          className="flex gap-2 items-center relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-white before:transition hover:before:scale-x-100"
          href="/download"
        >
          <GiFriedFish />
          Pescados y mariscos
        </Link>
        <Link
          className="flex items-center gap-2 relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-white before:transition hover:before:scale-x-100"
          href="/download"
        >
          <GiNoodles />
          Pastas
        </Link>
        <Link
          className="flex gap-2 items-center relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-white before:transition hover:before:scale-x-100"
          href="/download"
        >
          <TbSalad />
          Ensaladas
        </Link>
        <Link
          className="flex items-center gap-2 relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-white before:transition hover:before:scale-x-100"
          href="/download"
        >
          <TbPlant2 />
          Vegetarianos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
