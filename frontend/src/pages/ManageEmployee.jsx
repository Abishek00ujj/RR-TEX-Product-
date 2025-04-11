import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setEmployees(response.data);
      } catch (error) {
        toast.error('Failed to fetch employees.');
        console.error('API Error:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleCardClick = (employee) => {
    navigate('/employee', { state: { employee } });
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">Employee Management</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Employees by Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map(employee => (
            <div
              key={employee.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer border-2 border-teal-200"
              onClick={() => handleCardClick(employee)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">{employee.name}</h3>
                <p className="text-gray-600">
                  <strong className="text-teal-700">Employee ID:</strong> {employee.employeeId}
                </p>
                <p className="text-gray-600">
                  <strong className="text-teal-700">Department:</strong> {employee.department}
                </p>
                <p className="text-gray-600">
                  <strong className="text-teal-700">Phone:</strong> {employee.phone}
                </p>
              </div>
            </div>
          ))}
          {filteredEmployees.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No employees found matching your search.</p>
            </div>
          )}
        </div>

        {/* Add Employee Button */}
        <button
          onClick={() => navigate('/add-employee')}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          + Add Employee
        </button>
      </div>
    </div>
  );
};

export default ManageEmployees;