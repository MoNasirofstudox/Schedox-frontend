import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function Venues() {
  const [venues, setVenues] = useState([])

  useEffect(() => {
    supabase.from('venues').select('*').then(({ data }) => {
      setVenues(data || [])
    })
  }, [])

  return (
    <div>
      <h1>Venues</h1>
      <ul>
        {venues.map(v => (
          <li key={v.id}>{v.name} ({v.capacity})</li>
        ))}
      </ul>
    </div>
  )
}
