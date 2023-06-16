import MyListbox from '@/components/ListBox'
import { useForm } from '@inertiajs/react'

export default function Pruebas ({ parameters, modelo }) {
  const { data, setData, get, processing, errors } = useForm({
    name: '',
    modelo: ''
  })
  console.log({ parameters, modelo })
  const handleClick = (e) => {
    e.preventDefault()
    get('/pruebas', {
      preserveState: true
    })
  }
  return (
    <main className=''>
      <form action='' method='get'>
        <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto mt-4 mb-8 sm:flex-row sm:max-w-xl gap-4'>
          <div className='relative flex-grow w-full'>
            <label htmlFor='name' className='sr-only'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              className='block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              value={data.name}
              onChange={e => setData('name', e.target.value)}
            />
            {errors.name && <div className='mt-1 text-sm text-red-600'>{errors.name}</div>}
          </div>
          <div className='realtive flex-grow w-full'>
            <MyListbox data={modelo} name='modelo' />
          </div>
          <button type='submit' className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none' disabled={processing} onClick={handleClick}>
            Submit
          </button>
        </div>
        {parameters.name ? <h1>{parameters.name}</h1> : <h1>I dont have name</h1>}
      </form>

    </main>
  )
}
