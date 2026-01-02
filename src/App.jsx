import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Venues from './pages/Venues'
import Timetable from './pages/Timetable'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </BrowserRouter>
  )
}
