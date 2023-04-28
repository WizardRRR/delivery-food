import React from 'react'

function Modal({ children, onClose }) {
  return (
    <>
      <div id="popup-modal" tabindex="-1" className="fixed inset-0 z-50 h-screen w-screen bg-black bg-opacity-30 flex items-center justify-center">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative  rounded-lg shadow bg-gray-700">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
              data-modal-hide="popup-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="p-6 text-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
