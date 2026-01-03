import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    supabase.from('courses').select('*').then(({ data }) => {
      setCourses(data || [])
    })
  }, [])

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.code} - {c.title}</li>
        ))}
      </ul>
    </div>
  )
}
