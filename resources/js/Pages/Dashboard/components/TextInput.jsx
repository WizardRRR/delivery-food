import React from 'react'

function TextInput({ onChange, value, label, type, id, errors }) {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-[#ec7c6a] appearance-none focus:outline-none focus:ring-0 focus:border-[#ec7c6a] peer"
          placeholder=" " />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#262837] px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
          {label}
        </label>
      </div>
    </>
  )
}

export default TextInput
