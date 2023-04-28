import React from 'react'
import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./../Pages/Dashboard/components/Sidebar";
import Car from "./../Pages/Dashboard/components/Car";
import Header from "./../Pages/Dashboard/components/Header";


function DashboardLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen flex">
        <Sidebar showMenu={showMenu} />
        {/* <Car showOrder={showOrder} setShowOrder={setShowOrder} /> */}
        {/* Menu movil */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl z-30">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button onClick={toggleOrders} className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-40 md:p-8 md:pb-20 p-4 pb-20 flex-grow">

          {/* Title content */}
          {/* <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Elige Platos</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownSLine /> Cenar en
              </button>
            </div> */}
          {/* Content */}
          {children}
        </main>
      </div>
    </>
  )
}

export default DashboardLayout
