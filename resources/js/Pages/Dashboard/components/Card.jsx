import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Modal from './Modal'
import axios from 'axios'
import CardEdit from "./CardEdit";

const Card = (props) => {
  const { img, description, name, price, id, setPlatos, category_id, categoria } = props;

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleDelete = () => {
    axios.delete(`plato/${id}`).then((respose) => {
      setPlatos(prevPlatos => prevPlatos.filter(plato => plato.id !== id));
      setShowModal(false);
    })
  }

  return (
    <>
      <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 shadow-xl">
        <img
          src={img}
          className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        />
        <p className="text-xl font-semibold">{name}</p>
        <p>{description}</p>
        <span className="text-gray-400">S/{price}</span>
        <p className="text-gray-400"> Categoria {categoria.nombre}</p>
        <div className="flex gap-4">
          <button
            className="hover:bg-gray-600 hover:scale-110 bg-[#262837] hover:font-bold shadow-lg px-3 py-2 flex items-center gap-2 rounded-md transition-all"
            onClick={() => setShowModal2(true)}
          ><AiFillEdit className="" /> Editar </button>
          <button
            className="hover:bg-gray-600 hover:scale-110 bg-[#262837] hover:font-bold shadow-lg px-3 py-2 flex items-center gap-2 rounded-md transition-all"
            onClick={() => setShowModal(true)}
          ><AiFillDelete /> Eliminar </button>
        </div>
      </div>
      {
        showModal && (
          <Modal onClose={setShowModal}>
            <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="mb-5 text-lg font-normal text-gray-400">¿Estas seguro que deseas borrar {"plato"} de tus platos?</h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={handleDelete}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              Si, estoy seguro
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => setShowModal(false)}
              className="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">No, cancelar</button>
          </Modal>
        )
      }
      {
        showModal2 && (
          <Modal onClose={setShowModal2}>
            <CardEdit
            img={img}
            description={description}
            name={name}
            price={price}
            category_id={category_id}
            id={id}
            categoria={categoria}
            closeModal={setShowModal2} />
          </Modal>)
      }
    </>
  );
};

export default Card;
