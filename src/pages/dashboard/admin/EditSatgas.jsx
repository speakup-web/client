import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { userService } from './../../../api/userService';

export function EditSatgas() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const email = new URLSearchParams(location.search).get('email');
  const [taskforce, setTaskforce] = useState({
    name: '',
    password: '',
  });

  useEffect(() => {
    const fetchTaskforceByEmail = async () => {
      try {
        const { data } = await userService.getTaskforceByEmail(email, auth.accessToken);
        const taskforceByEmail = data.results.find(taskforce => taskforce.email === email);
        setTaskforce(taskforceByEmail);
      } catch (error) {
        console.error('Error fetching taskforce:', error);
      }
    };

    fetchTaskforceByEmail();
  }, [email, auth.accessToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedTaskForce = {
        ...taskforce, // Spread the existing state
        name: e.target.name.value, // Use e.target to get form input values
        password: e.target.password.value,
      };

      const data = await userService.putTaskforce(email, updatedTaskForce, auth.accessToken);
      console.log('Taskforce profile updated:', data);
      
      setTaskforce(updatedTaskForce);
      alert('Taskforce account updated successfully!');
      navigate('/dashboard/admin/daftar-satgas');
    } catch (error) {
      console.error('Error updating taskforce profile:', error);
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
                defaultValue={taskforce.name}
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
                value={email}
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
                defaultValue={taskforce.password}
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
