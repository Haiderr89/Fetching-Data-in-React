// src/App.jsx
import './App.css'
import * as studentService from './services/studentService'
import { useState } from 'react'

const App = () => {

  const [students, setStudents] = useState([])

  const fetchAllStudents = async () => {
    const studentData = await studentService.index()
    setStudents(studentData)
  }

  fetchAllStudents()

  return (
    <>
    {students.map((student) => (
      <p>{student.name}</p>
    ))}
  
    </>
  );
}

export default App