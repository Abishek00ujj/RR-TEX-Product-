import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const EmployeeProfile = () => {
  const { id } = useParams(); // Use 'id' to match your route parameter
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`); // Use the correct endpoint
        setEmployee(response.data);
      } catch (error) {
        toast.error('Failed to fetch employee details.');
        console.error('API Error:', error.response ? error.response.data : error.message);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) return <div>Loading employee details...</div>;

  return (
    <div className="min-h-screen bg-white p-4">
      <h2 className="text-2xl font-bold text-center mb-6">{employee.name}'s Profile</h2>
      <p><strong>Employee ID:</strong> {employee.employeeId}</p>
      <p><strong>Blood Group:</strong> {employee.bloodGroup}</p>
      <p><strong>Address:</strong> {employee.address}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Department:</strong> {employee.department}</p>
    </div>
  );
};

export default EmployeeProfile;