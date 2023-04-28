import { useForm } from "@inertiajs/react";
import React, { useRef } from "react";
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
import { MdSaveAs } from 'react-icons/md'
import { ImCancelCircle } from 'react-icons/im'

const CardEdit = ({ img, description, price, name, category_id, closeModal, id }) => {

  const { data, setData, errors, post } = useForm({
    nombre: name,
    descripcion: description,
    category_id: category_id,
    precio: price,
    foto: ""
  });

  const handleUpdate = () => {
    post(`update/plato/${id}`);
    window.location.reload();
  }

  const handleImageChange = (e) => {
    let foto = e.target.files[0];
    setData("foto", foto);
  };
  const inputRef = useRef(null); // Referencia al input para subir las imágenes
  const handleClickRef = () => {
    inputRef.current.click(); // Al hacer click en el botón se ejecutará el input
  };

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <div className="relative mb-4">
        <img
          src={data.foto ? URL.createObjectURL(data.foto) : img}
          className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        />
        <div className="absolute w-full -bottom-[15px]">
          <button onClick={handleClickRef} className='mx-auto flex gap-2 bg-slate-500 shadow-lg p-2 items-center rounded-full text-gray-300 font-semibold hover:scale-105 hover:bg-slate-900 transition-all'>
            <MdOutlineAddPhotoAlternate />
          </button>
        </div>
      </div>
      {/* trucazo */}
      <input
        type="file"
        name=""
        ref={inputRef}
        id=""
        className="w-10 hidden"
        onChange={handleImageChange}
      />
      <input
        type="text"
        name=""
        id=""
        value={data.nombre}
        onChange={(e) => setData("nombre", e.target.value)}
        className="bg-transparent rounded-lg text-center"
      />
      <textarea
        value={data.descripcion}
        onChange={(e) => setData("descripcion", e.target.value)}
        className="bg-transparent rounded-lg text-center"
        id=""
        cols="30"
        rows="4"></textarea>
      <input
        value={data.precio}
        onChange={(e) => setData('precio', e.target.value)}
        type="number"
        className="bg-transparent rounded-lg text-center"
      />
      <div className="flex gap-4">
        <button
          className="hover:bg-gray-600 hover:scale-110 bg-[#262837] hover:font-bold shadow-lg px-3 py-2 flex items-center gap-2 rounded-md transition-all"
          onClick={handleUpdate}
        ><MdSaveAs className="" /> Guardar </button>
        <button
          className="hover:bg-gray-600 hover:scale-110 bg-[#262837] hover:font-bold shadow-lg px-3 py-2 flex items-center gap-2 rounded-md transition-all"
          onClick={() => closeModal(false)}
        ><ImCancelCircle /> Cancelar </button>
      </div>
    </div >
  );
};

export default CardEdit;
