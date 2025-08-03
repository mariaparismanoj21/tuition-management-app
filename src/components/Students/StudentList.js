import React from 'react';

function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <input type="search" placeholder="Search students..." />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Fees Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.batch}</td>
              <td>{student.feesPaid ? 'Paid' : 'Pending'}</td>
              <td>
                <button>Edit</button>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;