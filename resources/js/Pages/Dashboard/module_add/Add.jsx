import DashboardLayout from '@/Layouts/DashboardLayout'
import { useForm } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react'
import TextInput from './../components/TextInput'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
import Reloj from '../components/Reloj';

function Add(props) {
  const { data, setData, errors, post } = useForm({
    nombre: "",
    descripcion: "",
    category_id: "",
    precio: "",
    foto: ""
  });

  console.log(data)
  console.log(props)
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('store.plato'));
  };



  const handleImageChange = (e) => {
    let foto = e.target.files[0];
    setData("foto", foto);
  };
  const inputRef = useRef(null); // Referencia al input para subir las imágenes
  const handleClickRef = () => {
    inputRef.current.click(); // Al hacer click en el botón se ejecutará el input
  };

  return (
    <>
      <DashboardLayout>
        <Reloj></Reloj>
        <hr className='mt-4 mb-10' />
        <p className=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-300">Añade un nuevo plato</p>
        <div className='mt-10 flex flex-col md:flex-row justify-center'>

          <form method='post' onSubmit={handleSubmit} className='flex flex-col gap-4 md:min-w-[350px] md:max-w-[500px] mx-auto md:m-0 w-full'>
            <div>
              <TextInput
                id="nombre"
                type="text"
                label="Nombre del plato"
                value={data.nombre}
                onChange={(e) => setData("nombre", e.target.value)}
              />
              {errors.nombre && <div className='text-red-400 text-sm'>{errors.nombre}</div>}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-gray-300">
                Descripcion del plato
              </label>
              <textarea
                id="message"
                rows="4"
                value={data.descripcion}
                onChange={(e) => setData("descripcion", e.target.value)}
                className="block p-2.5 w-full text-sm rounded-lg border bg-[#262837] border-[#ec7c6a] placeholder-gray-400 text-white focus:ring-[#ec7c6a] focus:border-[#ec7c6a]"
              ></textarea>
              {errors.descripcion && <p className='text-red-400 text-sm'>{errors.descripcion}</p>}
            </div>
            <div>
              <TextInput
                id="precio"
                type="number"
                label="Precio del plato"
                value={data.precio}
                onChange={(e) => setData("precio", e.target.value)}
              />
              {errors.precio && <div className='text-red-400 text-sm'>{errors.precio}</div>}
            </div>
            <div>
              <select
                id="categoria"
                className="rounded-lg bg-[#262837] text-gray-300 w-full focus:ring-[#ec7c6a] focus:border-[#ec7c6a] border-[#ec7c6a]"
                value={data.category_id}
                onChange={(e) => setData("category_id", e.target.value)}
              >
                <option value="">Seleccione una categoría</option>
                {
                  props.categorias.map((categoria, index) => {
                    return (
                      <option key={index} value={categoria.id}>{categoria.nombre}</option>
                    )
                  })
                }
              </select>
              {errors.category_id && <p className='text-red-400 text-sm'>{errors.category_id}</p>}
            </div>

            <button
              className="group relative inline-block overflow-hidden border border-[#ec7c6a] px-8 py-3 focus:outline-none focus:ring"
              href="/download"
            >
              <span
                className="absolute inset-y-0 left-0 w-[2px] bg-[#ec7c6a] transition-all group-hover:w-full group-active:bg-indigo-500"
              ></span>
              <span
                className="relative text-sm font-medium text-gray-300 transition-colors group-hover:text-white"
              >
                Añadir Plato
              </span>
            </button>
          </form>
          <div className='flex flex-col md:ml-14'>
            <img
              src={data.foto ? URL.createObjectURL(data.foto) : "https://us.123rf.com/450wm/piren/piren1703/piren170301324/74444935-el-icono-de-la-c%C3%A1mara-en-un-fondo-negro.jpg?ver=6"}
              className='w-60 h-60 lg:w-80 lg:h-80 object-cover  shadow-2xl rounded-full mx-auto md:mr-0 mb-10' />
            <button onClick={handleClickRef} className=' w-fit self-center flex gap-2 bg-[#1F1D2B] shadow-lg p-2 items-center rounded-md text-gray-300 font-semibold hover:scale-105 transition-all'>
              <MdOutlineAddPhotoAlternate />
              <p>Suba una foto</p>
            </button>
            {errors.foto && <p className='text-red-400 text-sm text-center mt-3'>{errors.foto}</p>}
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
      </DashboardLayout>
    </>
  )
}

export default Add
