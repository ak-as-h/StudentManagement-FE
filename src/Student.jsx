
import React from "react";
import { useState } from "react";
import {
  addStudent,
  getAllStudents as getAllStudentsAPI,
  deleteStudent
} from "./services/AllAPI";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Student = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudentsAPI();
      setStudents(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch students");
    }
  };

  const onEditClick = (studentData) => {
    setStudentData({
      name: studentData.name,
      email: studentData.email,
      course: studentData.course,
      phone: studentData.phone,
    });
  };

  const onAddStudentClick = async () => {
    try {
      let apiResponse = await addStudent(studentData);

      if (apiResponse.status === 201) {
        toast.success("Student added successfully");

        setStudentData({
          name: "",
          email: "",
          course: "",
          phone: "",
        });

        fetchStudents();
      } else {
        toast.error("Failed to add student");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the student");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiresponse = await deleteStudent(id);


      if (apiresponse.status === 200 || apiresponse.status === 204) {
        toast.success("Student deleted successfully");
        fetchStudents();
      } else {
        toast.error("Failed to delete student");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the student");
    }
  };

  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-center">
        Student Management System
      </h2>

      <p className="text-lg text-gray-700 text-center">
        Welcome to the Student Management System!
      </p>

      <div className="flex flex-col items-center mt-8">
        <h3>Student Name</h3>
        <input
          type="text"
          value={studentData.name}
          onChange={(e) =>
            setStudentData({ ...studentData, name: e.target.value })
          }
          placeholder="Enter student name"
          className="border border-gray-300 rounded px-4 py-2 w-80 mb-4"
        />

        <h3>Email</h3>
        <input
          type="email"
          value={studentData.email}
          onChange={(e) =>
            setStudentData({ ...studentData, email: e.target.value })
          }
          placeholder="Enter student email"
          className="border border-gray-300 rounded px-4 py-2 w-80 mb-4"
        />

        <h3>Course</h3>
        <input
          type="text"
          value={studentData.course}
          onChange={(e) =>
            setStudentData({ ...studentData, course: e.target.value })
          }
          placeholder="Enter student course"
          className="border border-gray-300 rounded px-4 py-2 w-80 mb-4"
        />

        <h3>Phone Number</h3>
<input
  type="text"
  value={studentData.phone}
  onChange={(e) =>
    setStudentData({ ...studentData, phone: e.target.value })
  }
  placeholder="Enter student phone number"
  className="border border-gray-300 rounded px-4 py-2 w-80 mb-4"
/>

<button
  onClick={onAddStudentClick}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Add Student
</button>
      </div>

      <div className="flex flex-col items-center mt-8">
        <table>
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={ index}>
                <td className="border border-gray-300 px-4 py-2">
                  {student.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.course}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onEditClick(student)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteClick(student.id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </>
  );
};

export default Student;
