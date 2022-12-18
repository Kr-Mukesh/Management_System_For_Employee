import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {

    const navigate =  useNavigate();

    const editEmployee = (e, id) => {
            e.preventDefault();
            navigate(`/editEmployee/${id}`);
    }

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-amber-700">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-lime-600">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-blue-800">{employee.emailId}</div>
      </td>
      <td className="text-left px-3 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:bg-blue-200 px-2 hover:cursor-pointer"
        >
          EDIT
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-red-600 hover:text-red-800 hover:bg-red-200 px-2 hover:cursor-pointer"
        >
          DELETE
        </a>
      </td>
    </tr>
  );
};

export default Employee;
