import { useState, useEffect } from 'react'
import getBikes from '@/services/getBikes'

export default function useBikes ({ make = '', model = '', year = '' }) {
  const [bikesData, setBikesData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      console.log('Haciendo petición')
      getBikes({ make, model, year }).then(newBikesData => {
        setBikesData(newBikesData)
      })
    } catch (e) {
      console.error('Error al hacer la petición en el custom hook')
    } finally {
      setLoading(false)
    }
  }, [make, model, year])
  return { bikesData, loading }
}
