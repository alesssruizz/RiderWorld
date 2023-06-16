
export default function Landing ({ className = '' }) {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8 min-h-screen'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-48 sm:py-44 lg:py-36 xl:py-auto'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Entérate de los modelos que se añadiran a la tienda próximamente.{' '}
            <a href='#' className='font-semibold text-indigo-600'>
              <span className='absolute inset-0' />
              Leer más <span>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl'>
            Rider<span className='text-indigo-600 '>World</span>
          </h1>
          <h2 className='mt-6 text-3xl leading-8 text-gray-600'>
            Adquiere la moto de tus <span className='text-indigo-600'>sueños</span> de una manera <br className='hidden sm:inline' />
            <span className='text-indigo-600'>fácil</span> y <span className='text-indigo-600'>rápida</span>
          </h2>
          <a href='#bikes' className='mt-10 flex items-center justify-center gap-x-6'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8 text-indigo-600 drop-shadow-xl animate-bounce stroke-2 hover:cursor-pointer'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </a>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
    </div>
  )
}
