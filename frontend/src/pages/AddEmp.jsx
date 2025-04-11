import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const AddEmployee = () => {
  const nameRef = useRef();
  const idRef = useRef();
  const bloodGroupRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const departmentRef = useRef();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const employeeData = {
      name: nameRef.current.value,
      employeeId: idRef.current.value,
      bloodGroup: bloodGroupRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      department: departmentRef.current.value
    };

    try {
      const response = await axios.post('http://localhost:5000/api/users', employeeData);
      if (response.status === 201) {
        toast.success('Employee added successfully!');
        navigate('/manageEmployee'); // Redirect to manage employees after successful addition
      } else {
        toast.error('Failed to add employee.');
        console.error('API Error:', response);
      }
    } catch (error) {
      toast.error('Failed to add employee.');
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4 flex items-center justify-center relative">
      {/* Colorful Back Button */}
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-10 rounded-lg shadow-xl border-2 border-purple-300"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Add New Employee</h2>

        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input ref={nameRef} type="text" id="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="mb-6">
          <label htmlFor="employeeId" className="block text-gray-700 text-sm font-bold mb-2">Employee ID</label>
          <input ref={idRef} type="text" id="employeeId" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="mb-6">
          <label htmlFor="bloodGroup" className="block text-gray-700 text-sm font-bold mb-2">Blood Group</label>
          <select ref={bloodGroupRef} id="bloodGroup" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <textarea
            ref={addressRef}
            id="address"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-32"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input ref={phoneRef} type="text" id="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="mb-8">
          <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
          <select ref={departmentRef} id="department" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
            <option value="">Select Department</option>
            <option value="Manager">Manager</option>
            <option value="Tailor">Tailor</option>
            <option value="Cutting Master">Cutting Master</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-500 transition duration-300"
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 00-12 12h4z" />
              </svg>
              Submitting...
            </div>
          ) : 'Add Employee'}
        </button>
      </form>
    </div>
    </>
  );
};

export default AddEmployee;