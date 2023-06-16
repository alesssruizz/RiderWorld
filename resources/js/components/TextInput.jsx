import { forwardRef, useEffect, useRef } from 'react'

export default forwardRef(function TextInput ({ type = 'text', className = '', isFocused = false, isErrors = false, ...props }, ref) {
  const input = ref || useRef()

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, [])

  return (
    <input
      {...props}
      type={type}
      className={
        (isErrors ? 'border-red-300 focus:border-red-500 focus:ring-red-500 ' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ') +
                'rounded-md shadow-sm ' +
                className
      }
      ref={input}
    />
  )
})
