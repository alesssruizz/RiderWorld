/* global route */
import TextInput from '@/components/TextInput'
import InputLabel from '@/components/InputLabel'
import InputError from '@/components/InputError'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { useForm, router } from '@inertiajs/react'
import Modal from '@/components/Modal'
import { useState } from 'react'

export default function UpdateMoto ({ bike, children, errors }) {
  const { data, setData, processing, reset } = useForm({
    marca: bike.marca,
    modelo: bike.modelo,
    año: bike.año,
    tipo: bike.tipo,
    cilindrada: bike.cilindrada,
    potencia: bike.potencia,
    numMarchas: bike.numMarchas,
    peso: bike.peso,
    precio: bike.precio,
    kilometros: bike.kilometros,
    descripcion: bike.descripcion,
    bike_image: null
  })

  const [confirmingBikeUpdate, setConfirmingBikeUpdate] = useState(false)

  const closeModal = () => {
    setConfirmingBikeUpdate(false)

    reset()
  }

  const submit = (e) => {
    e.preventDefault()
    /* patch(route('bikes.update', bike.id), {
      preserveScroll: true,
      _method: 'patch',
      data,
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
      onError: () => closeModal()
    }) */

    router.post(route('bikes.update', bike.id), {
      _method: 'put',
      ...data,
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
      onError: () => console.log('error')
    })
  }

  return (
    <form className='flex flex-col lg:grid lg:grid-cols-4 gap-5' onSubmit={submit}>
      <div>
        <InputLabel htmlFor='marca' value='Marca' />

        <TextInput
          id='marca'
          name='marca'
          value={data.marca}
          className='mt-1 block w-full'
          autoComplete='marca'
          isFocused
          isErrors={errors?.marca}
          onChange={(e) => setData('marca', e.target.value)}
        />

        <InputError message={errors?.marca} className='mt-2' />
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
          isErrors={errors?.modelo}
        />

        <InputError message={errors?.modelo} className='mt-2' />
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
          isErrors={errors?.año}
        />

        <InputError message={errors?.año} className='mt-2' />
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
          isErrors={errors?.precio}
        />

        <InputError message={errors?.precio} className='mt-2' />
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
          isErrors={errors?.tipo}
        />

        <InputError message={errors?.tipo} className='mt-2' />
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
          isErrors={errors?.cilindrada}
        />

        <InputError message={errors?.cilindrada} className='mt-2' />
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
          isErrors={errors?.potencia}
        />

        <InputError message={errors?.potencia} className='mt-2' />
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
          isErrors={errors?.numMarchas}
        />

        <InputError message={errors?.numMarchas} className='mt-2' />
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
          isErrors={errors?.peso}
        />

        <InputError message={errors?.peso} className='mt-2' />
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
          isErrors={errors?.kilometros}
        />

        <InputError message={errors?.kilometros} className='mt-2' />
      </div>

      <div className='col-span-2'>
        <InputLabel htmlFor='image' value='Nueva imagen' />

        <TextInput
          id='image'
          name='image'
          type='file'
          className='mt-1 block w-full'
          onChange={(e) => setData('bike_image', e.target.files[0])}
        />

        <InputError message={errors?.bike_image} className='mt-2' />
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
          isErrors={errors?.descripcion}
        />

        <InputError message={errors?.descripcion} className='mt-2' />
      </div>
      <PrimaryButton className='mt-8 col-span-4 justify-center max-w-xl w-full mx-auto' disabled={processing}>
        {children}
      </PrimaryButton>

      <Modal show={confirmingBikeUpdate} onClose={closeModal}>
        <form className='p-6'>
          <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-amber-600'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
            </svg>

          </div>
          <h2 className='text-lg font-medium text-gray-900 mt-5'>
            Estas seguro de que quieres editar la información de esta moto?
          </h2>

          <p className='mt-1 text-sm text-gray-600'>
            Una vez editada, todos los datos de la moto seran modificados. Esta accion no se puede deshacer.
          </p>

          <div className='mt-6 flex justify-end'>
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
            <PrimaryButton className='ml-3' disabled={processing} type='submit'>
              {children}
            </PrimaryButton>
          </div>
        </form>
      </Modal>

    </form>
  )
}
