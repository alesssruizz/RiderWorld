/* global route */
import { useState } from 'react'
import DangerButton from '@/Components/DangerButton'
import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'
import { useForm } from '@inertiajs/react'

export default function EliminarMoto ({ className = '', children, bike }) {
  const [confirmingBikeDeletion, setConfirmingBikeDeletion] = useState(false)

  const {
    delete: destroy,
    processing,
    reset
  } = useForm()

  const deleteBike = (e) => {
    e.preventDefault()

    destroy(route('bikes.destroy', bike.id), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset()
    })
  }

  const closeModal = () => {
    setConfirmingBikeDeletion(false)

    reset()
  }

  return (
    <section className={`space-y-6 text-center ${className}`}>

      <DangerButton className='w-full justify-center max-w-xl' onClick={() => setConfirmingBikeDeletion(true)}>{children}</DangerButton>

      <Modal show={confirmingBikeDeletion} onClose={closeModal}>
        <form onSubmit={deleteBike} className='p-6 h-full flex flex-col justify-center'>
          <div className='mx-auto flex w-44 lg:h-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>

            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-auto h-auto text-red-600 animate-bounce'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
            </svg>

          </div>
          <h2 className='text-lg font-medium text-gray-900 mt-5'>
            Estas seguro de que quieres eliminar esta moto?
          </h2>

          <p className='mt-1 text-sm text-gray-600'>
            Una vez eliminada, todos los datos de la moto seran eliminados. Esta accion no se puede deshacer.
          </p>

          <div className='mt-6 flex justify-end'>
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
            <DangerButton className='ml-3' disabled={processing}>
              {children}
            </DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  )
}
