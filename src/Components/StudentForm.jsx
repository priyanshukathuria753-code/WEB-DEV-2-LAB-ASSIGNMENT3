import { useState } from "react";

function StudentForm({ students, setStudents }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: students.length + 1,
      name,
      score: Number(score),
    };

    setStudents([...students, newStudent]);

    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;