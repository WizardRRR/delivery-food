import { Link, Head } from '@inertiajs/react';
import delivery_logo from './../assets/svg/delivery_logo.svg'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen bg-dots-darker bg-center bg-gradient-to-t from-slate-200 to-white dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="fixed top-0 right-0 p-6 text-right">
        </div>
        <div className='flex flex-col items-center self-center'>
          <img src={delivery_logo} className='w-64 sm:w-auto transition-all' />
          <h1 className="text-4xl font-extrabold dark:text-white text-center sm:text-6xl transition-all">Delivery Restaurant</h1>
          <p className="mb-6 text-sm mx-10 mt-1 sm:mt-5 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">La mejor comida, en la puerta de tu casa, tu sabor favorito a solo un clic de distancia</p>
          <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
            {
              auth.user ? (
                <Link
                  href={route('dashboard')}
                  className="group relative inline-block focus:outline-none focus:ring">
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5" ></span>
                  <span className="relative inline-block border-2 border-current px-6 py-2 md:px-8 md:py-3 text-sm font-bold uppercase tracking-widest">Entrar al Dashboard</span>
                </Link>
              ) : (
                <>
                  <Link
                    href={route('login')}
                    className="group relative inline-block focus:outline-none focus:ring">
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5" ></span>
                    <span className="relative inline-block border-2 border-current px-6 py-2 md:px-8 md:py-3 text-sm font-bold uppercase tracking-widest">Iniciar Sesion</span>
                  </Link>
                  <Link
                    href={route('register')}
                    className="group relative inline-block focus:outline-none focus:ring">
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                    <span className="relative inline-block border-2 border-current px-6 py-2 md:px-8 md:py-3  text-sm font-bold uppercase tracking-widest w-full text-center">Registrarse</span>
                  </Link>
                </>
              )
            }
          </div>
        </div>
        <div className='absolute flex justify-around md:justify-center w-full md:flex-row md:gap-4 bottom-0 text-sm font-semibold bg-slate-800 text-white bg-opacity-60'>
          <p>Laravel: {laravelVersion}</p>
          <p>Version de PHP: {phpVersion}</p>
          <p className='text-green-500'>Copyright © RoyerRutti</p>
        </div>
      </div>
    </>
  );
}
