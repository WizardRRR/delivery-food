import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
// svg
import delivery_logo from './../../assets/svg/delivery_logo.svg'
export default function Login({ status, canResetPassword }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <>
      <Head title="Log in" />
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end order-1 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://travejante.com.br/wp-content/uploads/2021/05/delivery-em-sao-paulo-2021-1200x800.png"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          </section>
          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <img src={delivery_logo} alt="" />
                </Link>
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Iniciar sesión en su cuenta
                </h1>
              </div>
              {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
              <form onSubmit={submit} className="mt-8 grid grid-cols-6 gap-6">
                <Link className="hidden lg:block w-40 col-span-6 m-auto " href="/">
                  <img src={delivery_logo} alt="" />
                </Link>
                <div className="col-span-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo Electronico
                  </label>

                  <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                  />

                  <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="col-span-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('password', e.target.value)}
                  />

                  <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="remember" className="flex gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                      checked={data.remember}
                      onChange={(e) => setData('remember', e.target.checked)}
                    />

                    <span className="text-sm text-gray-700">
                      Recuerdame
                    </span>
                  </label>
                </div>

                {canResetPassword && (
                  <Link href={route('password.request')} className=" col-span-4 text-end text-sm font-semibold text-blue-600">¿Olvidaste tu contraeña?</Link>)}

                <button
                  disabled={processing}
                  type='submit'
                  className=" col-span-6 group relative inline-block focus:outline-none focus:ring">
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                  <span className="relative inline-block border-2 border-current px-6 py-2 md:px-8 md:py-3  text-sm font-bold uppercase tracking-widest text-center w-full">Iniciar Sesion</span>
                </button>
                <div className='col-span-6 flex justify-center text-sm'>
                  <p>
                    ¿No tienes una cuenta?
                  </p>
                  <Link href={route('register')} className="ml-1 underline font-semibold text-blue-600">Registrate</Link>
                </div>
              </form>
            </div>
          </main>

        </div>
      </section>
    </>
  );
}
