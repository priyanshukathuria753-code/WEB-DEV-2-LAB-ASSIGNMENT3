import { useState } from "react";

function StudentRow({ student, students, setStudents }) {
  const [editing, setEditing] = useState(false);
  const [newScore, setNewScore] = useState(student.score);

  const saveScore = () => {
    const updated = students.map((s) =>
      s.id === student.id ? { ...s, score: Number(newScore) } : s
    );

    setStudents(updated);
    setEditing(false);
  };

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        {editing ? (
          <input
            type="number"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
        ) : (
          student.score
        )}
      </td>

      <td className={student.score >= 40 ? "pass" : "fail"}>
        {student.score >= 40 ? "Pass" : "Fail"}
      </td>

      <td>
        {editing ? (
          <button onClick={saveScore}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>✏️</button>
        )}
      </td>
    </tr>
  );
}

export default StudentRow;