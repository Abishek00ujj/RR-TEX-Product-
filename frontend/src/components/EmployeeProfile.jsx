import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EmployeeProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state || {};
  console.log(employee)

  if (!employee) {
    toast.error('No employee data available.');
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Error</h2>
          <p className="text-gray-600">No employee data available.</p>
          <button
            onClick={() => navigate('/manageEmployee')}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to Manage Employees
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-6">
          <h2 className="text-2xl font-bold text-center">{employee.name}'s Profile</h2>
        </div>
        <div className="p-8">
          <div className="mb-4">
            <strong className="text-gray-700">Employee ID:</strong>
            <p className="text-gray-600">{employee.employeeId}</p>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Blood Group:</strong>
            <p className="text-gray-600">{employee.bloodGroup}</p>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Address:</strong>
            <p className="text-gray-600">{employee.address}</p>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Phone:</strong>
            <p className="text-gray-600">{employee.phone}</p>
          </div>
          <div>
            <strong className="text-gray-700">Department:</strong>
            <p className="text-gray-600">{employee.department}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-right">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;