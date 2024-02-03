import delivery_logo from './../../assets/svg/delivery_logo.svg'
import AuthButton from './components/AuthButton'
import { Head } from '@inertiajs/react'

export default function Welcome({ auth }) {
  return (
    <>
      <Head title='Home' />
      <div className='relative flex justify-center items-center min-h-screen selection:bg-yellow-500
      bg-gradient-to-t from-slate-200 to-white selection:text-white'
      >
        <div className='fixed top-0 right-0 p-6 text-right'>
        </div>
        <div className='flex flex-col items-center self-center'>
          <img src={delivery_logo} className='w-64 sm:w-auto transition-all' />
          <h1 className='text-4xl font-extrabold text-center sm:text-6xl transition-all'>
            System Restaurant
          </h1>
          <p className='mb-6 text-sm mx-10 mt-1 sm:mt-5 font-normal text-gray-500
          lg:text-xl sm:px-16 xl:px-48  text-center'
          >
            Solución a restaurantes pequeños / medianos para administrar deliverys
          </p>
          <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
            {auth.user &&
              <AuthButton
                href={route('dashboard')}
                title='Entrar al Dashboard'
              />
            }
            {!auth.user &&
              <>
                <AuthButton
                  href={route('login')}
                  title='Iniciar Sesión'
                />
                <AuthButton
                  href={route('register')}
                  title='Registrarse'
                />
              </>
            }
          </div >
        </div >
      </div >
    </>
  )
}
