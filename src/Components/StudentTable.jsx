import StudentRow from "./StudentRow";

function StudentTable({ students, setStudents }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            students={students}
            setStudents={setStudents}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;