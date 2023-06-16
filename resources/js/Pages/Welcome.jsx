import { Head, usePage } from '@inertiajs/react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Bikes from '../components/Bikes'

export default function Welcome ({ auth, laravelVersion, phpVersion, bikes }) {
  console.log(usePage().props)

  return (
    <main className='bg-center bg-white bg-dots-darker relative'>
      <Head title='Welcome' />
      <Header auth={auth} />
      <Landing />
      <Bikes bikes={bikes} />
      <style>
        {`
          .bg-dots-darker {
              background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
          }
        `}
      </style>
    </main>
  )
}
