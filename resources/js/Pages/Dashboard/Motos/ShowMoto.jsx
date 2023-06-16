/* global route */
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import { Head, router } from '@inertiajs/react'
import { useState } from 'react'

export default function ShowMoto ({ bike, auth }) {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
    router.visit(route('welcome'))
  }
  return (
    <main>
      <Head title={`${bike.marca} ${bike.modelo}`} />
      <Header auth={auth} />
      <Landing />
      <Modal show={showModal} onClose={closeModal}>
        <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
          <div className='sm:flex sm:items-start'>
            <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
                {bike.fabricante} {bike.modelo} {bike.año}
              </h3>
              <div className='mt-2'>
                <p className='text-sm leading-5 text-gray-500'>
                  {bike.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  )
}
