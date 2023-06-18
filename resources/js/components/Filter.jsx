/* global route */
import { useForm, router } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Filter ({ filters: { marca, modelo, año } }) {
  const { data, setData, get, processing, errors } = useForm({
    marca: '',
    modelo: '',
    año: ''
  })
  const submit = (e) => {
    e.preventDefault()
    get(route('welcome'), {
      preserveScroll: true,
      preserveState: true
    })
  }

  return (
    <div className='bg-white' id='filtro'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='bg-indigo-50 shadow sm:rounded-md px-6 py-3'>
          <form onSubmit={submit} className='flex flex-col justify-center items-center md:flex-row gap-4'>
            <div className='relative flex-grow w-full'>
              <label htmlFor='name' className='sr-only'>Marca</label>
              <select
                id='marca'
                name='marca'
                className='block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={data.marca}
                onChange={(e) => { setData('marca', e.target.value) }}
              >
                <option value='' disabled>Marca</option>
                {marca?.map((listElement) => (
                  <option
                    key={listElement}
                    value={listElement}
                  >
                    {listElement}
                  </option>
                ))}
              </select>
              {errors.marca && <div className='mt-1 text-sm text-red-600'>{errors.marca}</div>}
            </div>
            <div className='relative flex-grow w-full'>
              <label htmlFor='name' className='sr-only'>Modelo</label>
              <select
                id='modelo'
                name='modelo'
                className='block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={data.modelo}
                onChange={(e) => { setData('modelo', e.target.value) }}
              >
                <option value='' disabled>Modelo</option>
                {modelo?.map((listElement) => (
                  <option
                    key={listElement}
                    value={listElement}
                  >
                    {listElement}
                  </option>
                ))}
              </select>
              {errors.modelo && <div className='mt-1 text-sm text-red-600'>{errors.modelo}</div>}
            </div>
            <div className='relative flex-grow w-full'>
              <label htmlFor='name' className='sr-only'>Año</label>
              <select
                id='año'
                name='año'
                className='block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={data.año}
                onChange={(e) => { setData('año', e.target.value) }}
              >
                <option value='' disabled>Año</option>
                {año?.map((listElement) => (
                  <option
                    key={listElement}
                    value={listElement}
                  >
                    {listElement}
                  </option>
                ))}
              </select>
              {errors.año && <div className='mt-1 text-sm text-red-600'>{errors.año}</div>}
            </div>
            <PrimaryButton
              type='anchor'
              href='/'
              className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none'
              disabled={processing}
            >
              Submit
            </PrimaryButton>
          </form>
          <div className='text-center mt-5 flex flex-cols gap-x-3 justify-center'>
            {data.marca !== '' && (
              <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                Quitar filtros
                <button onClick={() => router.visit(route('welcome') + '#filtro')} type='button' className='flex-shrink-0 ml-1 h-4 w-4 inline-flex items-center justify-center text-green-700'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </span>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}
