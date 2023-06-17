/* global route */
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Link, useForm, usePage, router } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import Avatar from '@/components/Avatar'

export default function UpdateProfileInformation ({ mustVerifyEmail, status, errors, className = '' }) {
  const user = usePage().props.auth.user
  const [recentlySuccessful, setRecentlySuccessful] = useState(false)

  const { data, setData, processing } = useForm({
    name: user.name,
    email: user.email,
    profile_image: null
  })

  const submit = (e) => {
    e.preventDefault()

    // patch(route('profile.update'))
    router.post(route('profile.update'), {
      _method: 'patch',
      ...data,
      preserveScroll: true
    })
  }

  const handleClick = () => {
    setRecentlySuccessful(true)

    setTimeout(() => {
      setRecentlySuccessful(false)
    }, 2000)
  }

  return (
    <section className={className}>
      <header>
        <h2 className='text-lg font-medium text-gray-900'>Informacion del perfil</h2>

        <p className='mt-1 text-sm text-gray-600'>
          Actualiza la informacion de tu perfil.
        </p>
      </header>

      <div className='mt-6'>
        <Avatar src={user.profile_image} className='w-60 ' />
      </div>

      <form onSubmit={submit} className='mt-6 space-y-6'>
        <div>
          <InputLabel htmlFor='name' value='Name' />

          <TextInput
            id='name'
            className='mt-1 block w-full'
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            required
            isFocused
            autoComplete='name'
          />

          <InputError className='mt-2' message={errors.name} />
        </div>

        <div>
          <InputLabel htmlFor='email' value='Email' />

          <TextInput
            id='email'
            type='email'
            className='mt-1 block w-full'
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
            autoComplete='username'
          />

          <InputError className='mt-2' message={errors.email} />
        </div>

        <div>
          <InputLabel htmlFor='image' value='Nueva foto de perfil' />

          <TextInput
            id='image'
            name='image'
            type='file'
            className='mt-1 block w-full'
            onChange={(e) => setData('profile_image', e.target.files[0])}
          />

          <InputError message={errors.profile_image} className='mt-2' />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className='text-sm mt-2 text-gray-800'>
              Your email address is unverified.
              <Link
                href={route('verification.send')}
                method='post'
                as='button'
                className='underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === 'verification-link-sent' && (
              <div className='mt-2 font-medium text-sm text-green-600'>
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className='flex items-center gap-4'>
          <PrimaryButton disabled={processing} onClick={handleClick}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enterFrom='opacity-0'
            leaveTo='opacity-0'
            className='transition ease-in-out'
          >
            <p className='text-sm text-gray-600'>Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  )
}
