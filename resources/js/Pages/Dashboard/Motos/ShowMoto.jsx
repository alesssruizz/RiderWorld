/* global route */
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import { Head, router } from '@inertiajs/react'
import { useState } from 'react'
import Avatar from '@/components/Avatar'
import PrimaryButton from '@/components/PrimaryButton'
import confetti from 'canvas-confetti'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export default function ShowMoto ({ bike, auth }) {
  const features = [
    { name: 'Tipo', description: bike.tipo ?? 'No especificado' },
    { name: 'Cilindrada (cc)', description: bike.cilindrada ?? 'No especificado' },
    { name: 'Potencia (HP)', description: bike.potencia ?? 'No especificado' },
    { name: 'Numero de marchas', description: bike.numMarchas ?? 'No especificado' },
    { name: 'Peso (kg)', description: bike.peso ?? 'No especificado' },
    { name: 'Kilometros', description: bike.kilometros === 0 ? 'Nueva' : bike.kilometros }
  ]
  const sameUser = bike.user.id === auth?.user?.id
  const [showModal, setShowModal] = useState(true)
  const [showBuyButton, setShowBuyButton] = useState(`${bike.precio} €`)
  console.log(auth)
  const closeModal = () => {
    // router.visit(route('welcome') + `#${bike.id}`)
    window.history.go(-1)
    setShowModal(false)
  }

  const handleMouseEnter = (e) => {
    if (showBuyButton === 'Comprado!' || showBuyButton === '' || showBuyButton === 'Tienes que estar logueado para comprar') return
    setShowBuyButton('Comprar')
  }

  const handleMouseLeave = (e) => {
    if (showBuyButton === 'Comprado!' || showBuyButton === '' || showBuyButton === 'Tienes que estar logueado para comprar') return
    setShowBuyButton(`${bike.precio} €`)
  }

  const handleClick = (e) => {
    if (showBuyButton === 'Comprado!' || showBuyButton === '' || showBuyButton === 'Tienes que estar logueado para comprar') return
    setShowBuyButton('')
    if (auth.user === null) {
      setShowBuyButton('Tienes que estar logueado para comprar')
      setTimeout(() => {
        router.visit(route('login'))
      }, 2000)
      return
    }
    setTimeout(() => {
      setShowBuyButton('Comprado!')
      confetti(
        {
          particleCount: 100,
          spread: 90,
          origin: { y: 0.6 }
        }
      )
    }, 2000)
    setTimeout(() => {
      submit(e)
    }, 5000)
  }

  const submit = (e) => {
    // e.preventDefault()
    router.visit(route('buy.bike', bike.id), {
      method: 'patch',
      data: auth.user.id
      // onFinish: () => router.visit(route('welcome'))
    })
  }

  return (
    <main className=''>
      <Head title={`${bike.marca} ${bike.modelo}`} />
      <Header auth={auth} />
      <Landing />
      <Modal show={showModal} onClose={closeModal} maxWidth='7xl'>
        <div className='bg-white px-4 my-8 sm:mt-0 pb-4 sm:p-6 sm:pb-4'>

          <div className='w-full mb-6 lg:mb-0 lg:w-auto lg:fixed lg:bottom-10 lg:right-16 inline-flex items-center justify-center'>
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
            {!sameUser && (
              <form onSubmit={submit}>
                <PrimaryButton type='submit' disabled={showBuyButton === ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className='min-w-full justify-center'>
                  <ShoppingBagIcon className='h-5 w-5 mr-2' />
                  {showBuyButton}
                </PrimaryButton>
              </form>
            )}
          </div>
        </div>
      </Modal>
    </main>
  )
}
