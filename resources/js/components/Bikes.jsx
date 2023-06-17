/* global route */
import { usePage, Link } from '@inertiajs/react'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

export default function Bikes ({ bikes }) {
  const isDashboard = route().current('dashboard')
  const user = usePage().props.auth.user
  const hasBikes = bikes.data?.length > 0
  console.log(bikes.data)
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
                {bikes.total} motos registradas
              </h2>
              <p className='mt-4 text-lg leading-6 text-gray-500'>
                Estas son las motos que tienes registradas a tu
                nombre.
              </p>
            </>
            )
          : (
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
              <div className='text-center'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {bikes.total} motos encontradas
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
        {bikes.data.map((bike) => (
          <section key={bike.id} id={bike.id} className='relative'>
            {isDashboard && (
              <div className='absolute top-2 right-2 z-10'>
                <EditBike bike={bike} />
              </div>
            )}
            <Link
              className='group'
              href={route('bikes.show', bike.id)}
            >
              <div className='aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-indigo-100 xl:aspect-h-4 xl:aspect-w-7'>
                <img
                  src={bike.bike_image}
                  alt={`${bike.marca} ${bike.modelo} ${bike.año}`}
                  className='h-full w-full object-center object-cover group-hover:opacity-75 transition ease-in-out duration-150'
                />
              </div>
            </Link>
            <div className='mt-4 flex justify-between'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  {bike.marca}
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  {bike.modelo}
                </p>
              </div>
              {!isDashboard && (
                <span className='relative inline-flex'>
                  <span
                    className='inline-flex items-center px-2 py-1 shadow rounded-md bg-purple-50 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 h-fit my-auto'
                  >
                    {bike.kilometros < 1000 ? 'Nueva' : 'Segunda mano'}
                  </span>
                  <span className={`flex absolute h-3 w-3 top-0 right-0 mt-1 -mr-1 ${bike.kilometros > 1000 && 'hidden'}`}>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75' />
                    <span className='relative inline-flex rounded-full h-3 w-3 bg-indigo-500' />
                  </span>
                </span>
              )}
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
      className='px-2 py-2 border border-transparent text-sm font-medium rounded-full text-white hover:text-slate-200 hover:bg-slate-50 hover:ring-1 ring-inset ring-purple-700/10 transition ease-in-out duration-500'
    >
      <WrenchScrewdriverIcon className='h-5 w-5 text-purple-700' aria-hidden='true' />
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
                  No se encontraron motos con los criterios de
                  búsqueda
                </p>
              </div>
            </div>
            )}
      </div>
    </div>
  )
}
