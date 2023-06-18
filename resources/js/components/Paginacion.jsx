import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'

export default function Paginacion ({ bikes, showY = 1300 }) {
  const [showPaginacion, setShowPaginacion] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > showY) {
      setShowPaginacion(true)
    } else {
      setShowPaginacion(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className={`max-w-2xl mx-auto rounded backdrop-blur-md bg-opacity-50 shadow-2xl shadow-indigo-200 fixed bottom-0 sm:bottom-10 right-0 left-0 flex items-center justify-between bg-indigo-200 ring-1 ring-inset ring-purple-700/10 px-4 py-3 sm:px-6 transition-opacity ease-in-out delay-500 duration-700 z-40 ${showPaginacion ? 'opacity-100' : 'opacity-0'}`}>
      <div className='flex flex-1 justify-between '>
        <Link
          as='button'
          href={bikes.prev_page_url + '#bikes'}
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          disabled={!bikes.prev_page_url}
        >
          <ChevronLeftIcon className='h-5 w-5 text-indigo-400' aria-hidden='true' />
          &nbsp;
          Previous
        </Link>
        <div className='hidden sm:relative sm:inline-flex sm:items-center sm:justify-between'>
          <p className='text-sm text-gray-700'>
            Viendo <span className='font-medium'>{bikes.from}</span> a <span className='font-medium'>{bikes.to}</span> de{' '}
            <span className='font-medium'>{bikes.total}</span> resultados.
          </p>
        </div>
        <Link
          as='button'
          href={bikes.next_page_url + '#bikes'}
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          disabled={!bikes.next_page_url}
        >
          Next
          &nbsp;
          <ChevronRightIcon className='h-5 w-5 text-indigo-400' aria-hidden='true' />
        </Link>
      </div>
    </div>
  )
}
