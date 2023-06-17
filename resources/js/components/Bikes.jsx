/* global route */
import { usePage, Link } from '@inertiajs/react'

export default function Bikes ({ bikes }) {
  const isDashboard = route().current('dashboard')
  const user = usePage().props.auth.user

  const hasBikes = bikes?.length > 0
  return (
    <section id='bikes'>
      {hasBikes
        ? (
          <BikesResults bikes={bikes} isDashboard={isDashboard} />
          )
        : (
          <BikesNoResults user={user} isDashboard={isDashboard} />
          )}
    </section>
  )
}

function BikesResults ({ bikes, isDashboard }) {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
      <div className='text-center mb-10'>
        {isDashboard
          ? (
            <>
              <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                {bikes.length} motos registradas
              </h2>
              <p className='mt-4 text-lg leading-6 text-gray-500'>
                Estas son las motos que tienes registradas a tu nombre.
              </p>
            </>
            )
          : (
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
              <div className='text-center'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {bikes.length} motos encontradas
                </h2>
                <p className='mt-4 text-lg leading-6 text-gray-500'>
                  Estas son las motos que encontramos con los
                  criterios de búsqueda
                </p>
              </div>
            </div>
            )}
      </div>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 xl:grid-cols-2 xl:gap-x-8'>
        {bikes.map((bike) => (
          <section key={bike.id} id={bike.id} className='relative'>
            {isDashboard && (
              <div className='absolute top-2 right-2 z-10'>
                <EditBike bike={bike} />
              </div>
            )}
            <Link className='group' href={route('bikes.show', bike.id)}>
              <div className='aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-indigo-100 xl:aspect-h-4 xl:aspect-w-7'>
                <img
                  src={bike.bike_image}
                  className='h-full w-full object-center object-cover group-hover:opacity-75 transition ease-in-out duration-150'
                />
              </div>
            </Link>
            <div className='mt-4 flex justify-between'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  {bike.fabricante}
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  {bike.modelo}
                </p>
              </div>
              <p className='text-sm font-medium text-gray-900'>
                {bike.año}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function EditBike ({ bike }) {
  return (
    <Link
      as='button'
      href={route('bikes.edit', bike.id)}
      className='px-2 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-500 hover:text-slate-200 transition ease-in-out duration-150'
    >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    </Link>
  )
}

function BikesNoResults ({ user, isDashboard }) {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='text-center'>
        {isDashboard
          ? (
            <>
              <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                {user.name}, no tienes motos registradas
              </h2>
              <p className='mt-4 text-lg leading-6 text-gray-500'>
                Empieza a registrar tus motos para que puedas
                venderlas
              </p>
              <Link
                href={route('bikes.create')}
                className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Vender una moto
              </Link>
            </>
            )
          : (
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
              <div className='text-center'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  No hay resultados
                </h2>
                <p className='mt-4 text-lg leading-6 text-gray-500'>
                  No se encontraron motos con los criterios de búsqueda
                </p>
              </div>
            </div>
            )}
      </div>
    </div>
  )
}
