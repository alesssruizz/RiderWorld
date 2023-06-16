/* global route */
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link } from '@inertiajs/react'

export default function Guest ({ children, src, className = '' }) {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-300 via-indigo-200 to-indigo-50'>
      <div>
        <Link href={route('welcome')}>
          <ApplicationLogo className='w-96 h-full fill-current text-gray-500 drop-shadow-2xl rounded-lg' src={src} />
        </Link>
      </div>

      <div className={`w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg ${className}`}>
        {children}
      </div>
    </div>
  )
}
