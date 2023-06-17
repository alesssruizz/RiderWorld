import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Bikes from '@/components/Bikes'
import Paginacion from '@/components/Paginacion'

export default function Dashboard ({ auth, bikes, flashMessage }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Mis motos</h2>}
      flashMessage={flashMessage}
    >
      <Head title='Dashboard' />
      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6'>
          <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
            <Bikes bikes={bikes} />
            <Paginacion bikes={bikes} showY={0} />
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  )
}
