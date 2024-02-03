import { Link } from '@inertiajs/react'

export default function AuthButton({ href, title, as, type, disabled }) {
  return (
    <Link
      as={as}
      type={type}
      disabled={disabled}
      href={href}
      className='group relative inline-block focus:outline-none focus:ring text-center'>
      <span className='absolute inset-0 translate-x-0 translate-y-0
      bg-yellow-300 transition-transform group-hover:translate-y-1.5
      group-hover:translate-x-1.5'></span>
      <span className='relative inline-block border-2 border-current
      px-6 py-2 md:px-8 md:py-3 text-sm font-bold uppercase tracking-widest'
      >
        {title}
      </span>
    </Link>
  )
}
