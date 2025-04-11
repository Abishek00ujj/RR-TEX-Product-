import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageSalary = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [salaryAmount, setSalaryAmount] = useState('');
    const [salaryTime, setSalaryTime] = useState('');
    const [salaryDate, setSalaryDate] = useState('');

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    useEffect(() => {
        // Set default date to today
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setSalaryDate(`${year}-${month}-${day}`);

        // Set default time to current time in 12-hour format
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        setSalaryTime(`${String(hours).padStart(2, '0')}:${minutes} ${ampm}`);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setSelectedEmployee(null); // Reset selected employee when search changes
    };

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEmployeeSelect = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleAddSalary = () => {
        if (selectedEmployee) {
            console.log('Salary Details:');
            console.log('Employee ID:', selectedEmployee.employeeId);
            console.log('Amount:', salaryAmount);
            console.log('Time:', salaryTime);
            console.log('Date:', salaryDate);
            alert('Salary details logged to console!');
            setSalaryAmount('');
            setSalaryTime('');
            setSalaryDate('');
            setSelectedEmployee(null);
        } else {
            alert('Please select an employee.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-purple-700">Manage Employee Salary</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Back
                    </button>
                </div>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search Employees by Name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {filteredEmployees.length > 0 && (
                    <div className="mb-6 border rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Search Results</h3>
                        <ul>
                            {filteredEmployees.map(employee => (
                                <li
                                    key={employee.id}
                                    className={`cursor-pointer hover:bg-gray-100 p-2 rounded ${selectedEmployee?.id === employee.id ? 'bg-blue-100' : ''}`}
                                    onClick={() => handleEmployeeSelect(employee)}
                                >
                                    {employee.name} (ID: {employee.employeeId})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {selectedEmployee && (
                    <div className="mt-8 border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Add Salary for {selectedEmployee.name} (ID: {selectedEmployee.employeeId})</h3>
                        <div className="mb-4">
                            <label htmlFor="salaryAmount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                            <input
                                type="number"
                                id="salaryAmount"
                                value={salaryAmount}
                                onChange={(e) => setSalaryAmount(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="salaryTime" className="block text-gray-700 text-sm font-bold mb-2">Time/Period</label>
                            <input
                                type="text"
                                id="salaryTime"
                                value={salaryTime}
                                onChange={(e) => setSalaryTime(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="e.g., Monthly, Weekly"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="salaryDate" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                            <input
                                type="date"
                                id="salaryDate"
                                value={salaryDate}
                                onChange={(e) => setSalaryDate(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button
                            onClick={handleAddSalary}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Salary
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageSalary;