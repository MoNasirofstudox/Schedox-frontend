import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function Timetable() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    supabase
      .from('schedule_sessions')
      .select('id, courses(code), venues(name), time_slots(day,start_time,end_time)')
      .then(({ data }) => {
        setSessions(data || [])
      })
  }, [])

  return (
    <div>
      <h1>Timetable</h1>
      <ul>
        {sessions.map(s => (
          <li key={s.id}>
            {s.courses?.code} — {s.time_slots?.day} {s.time_slots?.start_time} ({s.venues?.name})
          </li>
        ))}
      </ul>
    </div>
  )
}
