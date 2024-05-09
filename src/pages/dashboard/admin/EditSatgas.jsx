import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { userService } from '../../../api/userService';

export function EditSatgas() {
  const { auth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const navigate = useNavigate();
  const emailParam = new URLSearchParams(location.search).get('email');

  useEffect(() => {
    const fetchTaskforceByEmail = async () => {
      try {
        const { data } = await userService.getTaskforceByEmail(emailParam, auth.accessToken);
        // Filter the task force data based on the email
        const taskforceByEmail = data.results.find(taskforce => taskforce.email === emailParam);
        setFormData(taskforceByEmail);
      } catch (error) {
        console.error('Error fetching taskforce:', error);
        // Handle error appropriately (e.g., show error message)
      }
    };

    fetchTaskforceByEmail();
  }, [emailParam, auth.accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.putTaskforce(emailParam, formData, auth.accessToken); // Panggil putTaskforce
      alert('Taskforce account updated successfully!');
      navigate('/dashboard/admin/daftar-satgas'); 
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <main className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
      <div className="py-4">
        <h1 className="poppins-semibold text-2xl text-[#0B497B]">
          Edit Satgas
        </h1>
        <div className="border-b-2 w-16 border-[#0B497B] pt-4" />

        <div className="mt-10 p-4 border bg-white rounded-lg" style={{ width: '700px', height: 'auto', padding: '30px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-blue-500 mb-2">
                Nama
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-blue-500 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={emailParam}
                disabled
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block text-sm font-medium text-blue-500 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 mt-6 rounded-lg"
            >
              Simpan
            </button>
            <button
              type="button"
              className="border border-indigo-500 text-indigo-600 font-semibold py-2 px-4 mt-6 mx-3 rounded-lg"
            >
              <Link to="/dashboard/admin/daftar-satgas">Cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
