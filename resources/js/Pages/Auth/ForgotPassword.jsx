import delivery_logo from './../../assets/svg/delivery_logo.svg'
import { Head, Link, useForm } from '@inertiajs/react'
import CustomInput from '@/Components/CustomInput'

export default function ForgotPassword({ status }) {

  const { data, setData, post, processing, errors } = useForm({
    email: '',
  })

  const submit = (e) => {
    e.preventDefault()
    post(route('password.email'))
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center
    bg-gradient-to-t from-slate-50 to-white'
    >
      <div className='p-5 flex flex-col justify-center md:w-[600px]'>
        <Head title='Recuperar contraseña' />
        <img src={delivery_logo} alt='logo' className='w-[150px] h-[150px] self-center' />
        <h2 className='font-bold text-lg text-stone-950 mb-2 text-center'>
          ¿Olvidaste tu contraseña?
        </h2>
        <div className='mb-4 text-sm text-gray-600'>
          Ningún problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos una contraseña por correo electrónico.
          enlace de reinicio que le permitirá elegir uno nuevo.
        </div>
        {status && <div className='mb-4 font-medium text-sm text-green-600'>{status}</div>}
        <form onSubmit={submit}>
          <CustomInput
            type='email'
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            error={errors.email}
          />
          <div className='flex flex-col gap-3 items-center justify-end mt-4'>
            <button
              type='submit'
              disabled={processing}
              className='group relative inline-block focus:outline-none focus:ring text-center'
            >
              <span className='absolute inset-0 translate-x-0 translate-y-0
                  bg-yellow-300 transition-transform group-hover:translate-y-1.5
                  group-hover:translate-x-1.5'></span>
              <span className='relative inline-block border-2 border-current
                  px-6 py-2 md:px-8 md:py-3 text-sm font-bold uppercase tracking-widest'
              >
                Enlace para restablecer contraseña de correo electrónico
              </span>

            </button>

            <Link
              href={route('login')}
              type='button'
              className='border-2 border-stone-800 p-3 w-full font-semibold bg-white text-center'
            >
              Ir al inicio
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
