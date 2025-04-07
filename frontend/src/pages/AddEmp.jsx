import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const nameRef = useRef();
  const idRef = useRef();
  const bloodGroupRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const departmentRef = useRef();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const employeeData = {
      name: nameRef.current.value,
      id: idRef.current.value,
      bloodGroup: bloodGroupRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      department: departmentRef.current.value
    };

    setTimeout(() => {
      console.log('Submitted Employee Data:', employeeData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white px-4 flex items-center justify-center relative">
      {/* Top-left Light Green Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-green-200 hover:bg-green-300 text-black font-medium py-1 px-4 rounded shadow"
      >
        ← Back
      </button>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 border border-black rounded shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Employee</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input ref={nameRef} type="text" className="w-full p-2 border border-black rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Employee ID</label>
          <input ref={idRef} type="text" className="w-full p-2 border border-black rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Blood Group</label>
          <input ref={bloodGroupRef} type="text" className="w-full p-2 border border-black rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            ref={addressRef}
            className="w-full p-2 border border-black rounded resize-none h-24"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone Number</label>
          <input ref={phoneRef} type="text" className="w-full p-2 border border-black rounded" required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Department</label>
          <input ref={departmentRef} type="text" className="w-full p-2 border border-black rounded" required />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded flex justify-center items-center hover:bg-gray-800 transition"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 00-12 12h4z" />
              </svg>
              Submitting...
            </>
          ) : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
