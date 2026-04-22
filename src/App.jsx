import React, { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import StudentForm from "./Components/StudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", score: 50 },
    { id: 2, name: "Priya", score: 30 }
  ]);

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const failed = students.filter((s) => s.score < 40).length;

  return (
    <div className="container">
      <Header />

      <div className="stats">
        <div className="card">Total Students: {total}</div>
        <div className="card pass">Passed: {passed}</div>
        <div className="card fail">Failed: {failed}</div>
      </div>

      <StudentForm students={students} setStudents={setStudents} />
      <StudentTable students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;