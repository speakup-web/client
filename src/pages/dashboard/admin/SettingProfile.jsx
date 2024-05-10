import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { userService } from '../../../api/userService';

export function SettingProfileAdmin() {
  const { auth } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const getUserProfile = await userService.getUserProfile(auth.accessToken);
        setUserData(getUserProfile.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [auth.accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.putUserProfile(userData, auth.accessToken);
      alert('Profile updated successfully!');
      navigate('/dashboard/admin');
    } catch (error) {
      console.error('Error updating profile:', error);
      const errorMessage = error.response.data.message || 'An error occurred while updating profile.';
      alert(`Failed to update profile: ${errorMessage}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
      <div className="py-4">
        <h1 className="poppins-semibold text-2xl text-[#0B497B]">
          Setting Profile
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
                value={userData.name}
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
                value={userData.email}
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
          </form>
        </div>
      </div>
    </main>
  );
}
