/* global route */
import { Head, useForm } from '@inertiajs/react'
import { useEffect } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'

function CreateBikeForm () {
  const { data, setData, post, processing, errors, reset } = useForm({
    marca: '',
    modelo: '',
    año: '',
    tipo: '',
    cilindrada: '',
    potencia: '',
    numMarchas: '',
    peso: '',
    precio: '',
    kilometros: '',
    descripcion: '',
    bike_image: ''
  })

  const submit = (e) => {
    e.preventDefault()
    post(route('bikes.store'), {
      preserveScroll: true
    })
  }

  useEffect(() => {
    return () => {
      reset('marca', 'modelo', 'año', 'tipo', 'cilindrada', 'potencia', 'numMarchas', 'peso', 'precio', 'kilometros', 'descripcion')
    }
  }, [])

  return (
    <form onSubmit={submit} className='flex flex-col lg:grid lg:grid-cols-4 gap-5'>
      <div>
        <InputLabel htmlFor='marca' value='Marca' />

        <TextInput
          id='marca'
          name='marca'
          value={data.marca}
          className='mt-1 block w-full'
          autoComplete='marca'
          isFocused
          isErrors={errors.marca}
          onChange={(e) => setData('marca', e.target.value)}
        />

        <InputError message={errors.marca} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='modelo' value='Modelo' />

        <TextInput
          id='modelo'
          name='modelo'
          value={data.modelo}
          className='mt-1 block w-full'
          autoComplete='modelo'
          onChange={(e) => setData('modelo', e.target.value)}
          isErrors={errors.modelo}
        />

        <InputError message={errors.modelo} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='año' value='Año' />

        <TextInput
          id='año'
          name='año'
          value={data.año}
          className='mt-1 block w-full'
          autoComplete='año'
          onChange={(e) => setData('año', e.target.value)}
          isErrors={errors.año}
        />

        <InputError message={errors.año} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='precio' value='Precio' />

        <TextInput
          id='precio'
          name='precio'
          value={data.precio}
          className='mt-1 block w-full'
          autoComplete='precio'
          onChange={(e) => setData('precio', e.target.value)}
          isErrors={errors.precio}
        />

        <InputError message={errors.precio} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='tipo' value='Tipo' />

        <TextInput
          id='tipo'
          name='tipo'
          value={data.tipo}
          className='mt-1 block w-full'
          autoComplete='tipo'
          onChange={(e) => setData('tipo', e.target.value)}
          isErrors={errors.tipo}
        />

        <InputError message={errors.tipo} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='cilindrada' value='Cilindrada' />

        <TextInput
          id='cilindrada'
          name='cilindrada'
          value={data.cilindrada}
          className='mt-1 block w-full'
          autoComplete='cilindrada'
          onChange={(e) => setData('cilindrada', e.target.value)}
          isErrors={errors.cilindrada}
        />

        <InputError message={errors.cilindrada} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='potencia' value='Potencia' />

        <TextInput
          id='potencia'
          name='potencia'
          value={data.potencia}
          className='mt-1 block w-full'
          autoComplete='potencia'
          onChange={(e) => setData('potencia', e.target.value)}
          isErrors={errors.potencia}
        />

        <InputError message={errors.potencia} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='numMarchas' value='Número de marchas' />

        <TextInput
          id='numMarchas'
          name='numMarchas'
          value={data.numMarchas}
          className='mt-1 block w-full'
          autoComplete='numMarchas'
          onChange={(e) => setData('numMarchas', e.target.value)}
          isErrors={errors.numMarchas}
        />

        <InputError message={errors.numMarchas} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='peso' value='Peso' />

        <TextInput
          id='peso'
          name='peso'
          value={data.peso}
          className='mt-1 block w-full'
          autoComplete='peso'
          onChange={(e) => setData('peso', e.target.value)}
          isErrors={errors.peso}
        />

        <InputError message={errors.peso} className='mt-2' />
      </div>

      <div>
        <InputLabel htmlFor='kilometros' value='Kilómetros' />

        <TextInput
          id='kilometros'
          name='kilometros'
          value={data.kilometros}
          className='mt-1 block w-full'
          autoComplete='kilometros'
          onChange={(e) => setData('kilometros', e.target.value)}
          isErrors={errors.kilometros}
        />

        <InputError message={errors.kilometros} className='mt-2' />
      </div>

      <div className='col-span-2'>
        <InputLabel htmlFor='image' value='Imagen' />

        <TextInput
          id='image'
          name='image'
          type='file'
          className='mt-1 block w-full'
          onChange={(e) => setData('bike_image', e.target.files[0])}
        />

        <InputError message={errors.bike_image} className='mt-2' />
      </div>

      <div className='mt-4 col-span-4'>
        <InputLabel htmlFor='descripcion' value='Descripción' />

        <TextInput
          id='descripcion'
          name='descripcion'
          value={data.descripcion}
          className='mt-1 block w-full'
          autoComplete='descripcion'
          onChange={(e) => setData('descripcion', e.target.value)}
          isErrors={errors.descripcion}
        />

        <InputError message={errors.descripcion} className='mt-2' />
      </div>

      <PrimaryButton className='mt-8 col-span-4 mx-auto' disabled={processing}>
        Vender
      </PrimaryButton>
    </form>

  )
}

export default function VenderMoto ({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Introduce los datos de la moto a vender</h2>}
    >
      <Head title='Vender moto' />
      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6'>
          <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
            <CreateBikeForm />
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  )
}
