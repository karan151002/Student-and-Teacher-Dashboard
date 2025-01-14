import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard'
import { Toaster } from 'react-hot-toast'
import Timetable from './component/TimeTable/TimeTable'
import CourseGrid from './pages/Courses/Courses'

export const StoreContext = createContext()

const App = () => {

  const value = {}

  return (
    <StoreContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/student-dashboard' element={<StudentDashboard />} />
          <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
          <Route path='/timetable' element={<Timetable />} />
          <Route path='/courses' element={<CourseGrid />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default App
