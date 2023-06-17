export default function Avatar ({ className = '', src }) {
  return (
    <div className={`aspect-1 ${className}`}>

      <img src={src} alt='Avatar' className='h-full w-full object-center object-cover rounded-full' />
    </div>
  )
}
