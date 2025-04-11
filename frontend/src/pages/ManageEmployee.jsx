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

  const handleCardClick = (employeeId) => {
    navigate(`/employee/${employeeId}`); // Navigate to employee profile
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Manage Employees</h2>

      <input
        type="text"
        placeholder="Search Employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-black rounded mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map(employee => (
          <div
            key={employee.id} // Use 'id' instead of 'employeeId'
            className="border border-gray-300 rounded p-4 cursor-pointer hover:shadow-lg"
            onClick={() => handleCardClick(employee.id)} // Use 'id' instead of 'employeeId'
          >
            <h3 className="text-xl font-semibold">{employee.name}</h3>
            <p>Employee ID: {employee.id}</p> {/* Use 'id' instead of 'employeeId' */}
            <p>Department: {employee.department}</p>
            <p>Phone: {employee.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEmployees;