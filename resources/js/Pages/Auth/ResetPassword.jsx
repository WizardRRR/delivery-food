import { Head, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

import delivery_logo from './../../assets/svg/delivery_logo.svg'
import CustomInput from '@/Components/CustomInput'

export default function ResetPassword({ token, email }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
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
    post(route('password.store'))
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center
    bg-gradient-to-t from-slate-50 to-white'>
      <Head title='Resetear contraseña' />
      <div className='p-5 flex flex-col justify-center md:w-[600px]'>
        <img src={delivery_logo} alt='logo' className='w-[150px] h-[150px] self-center' />
        <h2 className='font-bold text-lg text-stone-950 mb-2 text-center self-start'>
          Restablecer contraseña
        </h2>
        <div className='mb-4 text-sm text-gray-600'>
          Por favor asegurese de colocar una contraseña segura
        </div>
        <form className='flex flex-col gap-3' onSubmit={submit}>
          <CustomInput
            type='email'
            label='Correo electronico'
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            error={errors.email}
          />
          <CustomInput
            type='password'
            label='Nueva contraseña'
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            error={errors.password}
          />
          <CustomInput
            type='password'
            label='Confirmar nueva contraseña'
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            error={errors.password_confirmation}
          />
          <div className='flex items-center justify-center mt-4'>
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
                Restablecer contraseña
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
