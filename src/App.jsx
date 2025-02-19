// src/App.jsx
import "./App.css";
import * as studentService from "./services/studentService";
import { useEffect, useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  const fetchAllStudents = async () => {
    const studentData = await studentService.index();
    setStudents(studentData);
  };

  useEffect(() => {
    fetchAllStudents();
  }, [])

  const handleDelete = async (id) => {
    await studentService.deleteStudent(id)
  }
  return (
    <>
      {students.map((student) => (
        <li>
          <h3 style={{ color: student.favoriteColor }}>{student.name}</h3>
          <button onClick={ () => handleDelete(student._id)}>X</button>
        </li>
      ))}
    </>
  );
};

export default App;
