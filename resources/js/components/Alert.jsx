
export default function Alert ({ children }) {
  return (
    <div className='relative isolate overflow-hidden bg-green-50 max-w-4xl rounded-md mx-auto px-6 py-2.5 mt-8 sm:px-3.5'>
      <div className='flex gap-x-4 gap-y-2'>
        <div className=' shrink-0 '>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' className='w-6 h-6 text-green-400'>
            <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z' clipRule='evenodd' />
          </svg>

        </div>

        <p className='text-sm leading-6 text-green-800 text-center'>
          {children}
        </p>
      </div>
    </div>
  )
}
