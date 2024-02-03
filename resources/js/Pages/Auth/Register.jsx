import { Head, Link, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

import delivery_logo from './../../assets/svg/delivery_logo.svg'
import CustomInput from '@/Components/CustomInput'

export default function Register() {

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    post(route('register'))
  }

  return (
    <>
      <Head title='Register' />
      <section className='bg-white'>
        <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <img
              alt='Night'
              src='https://b8t4k3f8.rocketcdn.me/wp-content/uploads/2022/04/aumentar-ventas-delivery.png'
              className='absolute inset-0 h-full w-full object-cover opacity-80'
            />

            <div className='hidden lg:relative lg:block lg:p-10'>
              <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                Bienvenido a Delivery Restaurant 🍛
              </h2>
              <p className='mt-4 leading-relaxed text-white/90'>
                Bienvenido a nuestra plataforma de delivery de restaurantes. Inicia sesión o regístrate para pedir deliverys de platos de restaurantes de alta calidad.
                Regístrate hoy mismo.
              </p>
            </div>
          </section>
          <main
            className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'
          >
            <div className='max-w-xl lg:max-w-3xl'>
              <div className='relative -mt-16 block lg:hidden'>
                <Link
                  className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20'
                  href='/'
                >
                  <img src={delivery_logo} alt='' />
                </Link>
                <h1 className='mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                  Bienvenido a Delivery Restaurant 🍛
                </h1>
                <p className='mt-4 leading-relaxed text-gray-500'>
                  Bienvenido a nuestra plataforma de delivery de restaurantes. Inicia sesión o regístrate para pedir deliverys de platos de restaurantes de alta calidad. <br />Regístrate hoy mismo.
                </p>
              </div>

              <form onSubmit={submit} className='mt-8 grid grid-cols-6 gap-6'>
                <Link className='hidden lg:block w-40 col-span-6 m-auto ' href='/'>
                  <img src={delivery_logo} alt='' />
                </Link>
                <CustomInput
                  containerClassName='col-span-6'
                  label='Nombre'
                  required
                  value={data.name}
                  error={errors.name}
                  onChange={(e) => setData('name', e.target.value)}
                />
                <CustomInput
                  containerClassName='col-span-6'
                  label='Correo electronico'
                  required
                  value={data.email}
                  error={errors.email}
                  onChange={(e) => setData('email', e.target.value)}
                />
                <CustomInput
                  containerClassName='col-span-6 sm:col-span-3'
                  label='Contraseña'
                  required
                  value={data.password}
                  error={errors.password}
                  onChange={(e) => setData('password', e.target.value)}
                />
                <CustomInput
                  containerClassName='col-span-6 sm:col-span-3'
                  label='Confirmar contraseña'
                  required
                  value={data.password_confirmation}
                  error={errors.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                />

                <div className='col-span-6'>
                  <p className='text-sm text-gray-500'>
                    Al crear una cuenta, acepta nuestros
                    <a href='#' className='text-gray-700 underline ml-1 mr-1'>
                      términos y condiciones
                    </a>
                    y
                    <a href='#' className='text-gray-700 underline ml-1'>política de privacidad</a>
                  </p>
                </div>

                <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
                  <button
                    disabled={processing}
                    type='submit'
                    className='group relative inline-block focus:outline-none focus:ring'>
                    <span className='absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5'></span>
                    <span className='relative inline-block border-2 border-current px-6 py-2 md:px-8 md:py-3  text-sm font-bold uppercase tracking-widest w-full text-center'>Crear Cuenta</span>
                  </button>
                  <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                    ¿Ya tienes una cuenta?
                    <Link
                      href={route('login')}
                      className='ml-1 text-gray-700 underline'
                    >
                      Inicie Sesión
                    </Link>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}
