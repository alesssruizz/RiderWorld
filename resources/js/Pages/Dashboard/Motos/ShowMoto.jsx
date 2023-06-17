/* global route */
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import { Head, router } from '@inertiajs/react'
import { useState } from 'react'
import Avatar from '@/components/Avatar'
import PrimaryButton from '@/components/PrimaryButton'
import confetti from 'canvas-confetti'

export default function ShowMoto ({ bike, auth }) {
  const features = [
    { name: 'Tipo', description: bike.tipo },
    { name: 'Cilindrada (cc)', description: bike.cilindrada },
    { name: 'Potencia (HP)', description: bike.potencia },
    { name: 'Numero de marchas', description: bike.numMarchas },
    { name: 'Peso (kg)', description: bike.peso },
    { name: 'Kilometros', description: bike.kilometros === 0 ? 'Nueva' : bike.kilometros }
  ]

  const [showModal, setShowModal] = useState(true)
  const [showBuyButton, setShowBuyButton] = useState(`${bike.precio} €`)
  console.log(bike)

  const closeModal = () => {
    setShowModal(false)
    router.visit(route('welcome') + `#${bike.id}`)
  }

  const handleMouseEnter = (e) => {
    setShowBuyButton('Comprar')
  }

  const handleMouseLeave = (e) => {
    setShowBuyButton(`${bike.precio} €`)
  }

  const handleClick = (e) => {
    setShowBuyButton('Comprado!')
    confetti(
      {
        particleCount: 100,
        spread: 90,
        origin: { y: 0.8 }
      }
    )
  }
  return (
    <main className=''>
      <Head title={`${bike.marca} ${bike.modelo}`} />
      <Header auth={auth} />
      <Landing />
      <Modal show={showModal} onClose={closeModal} maxWidth='7xl'>
        <div className='bg-white px-4 my-8 sm:mt-0 pb-4 sm:p-6 sm:pb-4'>

          <div className='w-full mb-6 lg:mb-0 lg:w-auto lg:fixed lg:top-5 lg:right-16 inline-flex items-center justify-center'>
            De:
            <div className='ml-2 inline-flex items-center bg-indigo-100 p-2 rounded-lg border border-indigo-500/50 outline outline-offset-2 outline-2 outline-indigo-500/70'>
              <Avatar src={bike.user.profile_image} className='w-10' />
              <span className='ml-2'>{bike.user.name}</span>
            </div>
          </div>

          <div className='grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 text-center lg:text-left'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{`${bike.marca} ${bike.modelo} ${bike.año}`}</h2>
              <p className='mt-4 text-lg text-gray-500'>
                {bike.descripcion}
              </p>

              <dl className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8'>
                {features.map((feature) => (
                  <div key={feature.name} className='border-t border-indigo-200 pt-4'>
                    <dt className='font-medium text-gray-900'>{feature.name}</dt>
                    <dd className='text-sm text-gray-500'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className='aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-indigo-100 xl:aspect-h-4 xl:aspect-w-7 shadow-xl shadow-indigo-200'>
              <img
                src={bike.bike_image}
                alt={bike.modelo}
                className='h-full w-full object-center object-cover'
              />
            </div>
          </div>
          <div className='max-w-xs mx-auto mt-5 transition ease-in-out duration-1000'>
            <PrimaryButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className='min-w-full justify-center'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6 mr-2'>
                <path fillRule='evenodd' d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z' clipRule='evenodd' />
              </svg>
              {showBuyButton}
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </main>
  )
}
