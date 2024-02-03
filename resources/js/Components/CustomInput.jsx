export default function CustomInput({
  containerClassName,
  label,
  type = 'text',
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <div className={containerClassName}>
      <label htmlFor={label} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        id={label}
        type={type}
        name={label}
        value={value}
        onChange={onChange}
        {...props}
        className='mt-1 block w-full border-gray-300 focus:border-indigo-500
        focus:ring-indigo-500 rounded-md shadow-sm '
      />
      {error && <span className='text-sm text-red-500 font-medium'>{error}</span>}
    </div>
  )
}
