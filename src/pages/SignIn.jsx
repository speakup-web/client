import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Left from './../assets/illustrations/Left.png'
import LeftFull from './../assets/illustrations/Left full ver.3.png'
import { login } from "../api/api";

export default function SignIn({ setAccessToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const loginData = await login(email, password); // Call login function from api.js
            console.log("Login successful:", loginData);

            if (loginData.status === "success") {
                setAccessToken(loginData.data.accessToken);
                if (loginData.data.accessToken) {
                    try {
                        const decoded = atob(loginData.data.accessToken.split(".")[1]);
                        const user = JSON.parse(decoded);

                        if (user.role === "admin") {
                            navigate("/dashboard/admin"); // Redirect to admin dashboard
                        } else if (user.role === "satgas") {
                            navigate("/dashboard/satgas"); // Redirect to satgas dashboard
                        } else {
                            setError("Invalid role. Please contact support."); // Inform about invalid role
                        }
                    } catch (error) {
                        console.error("Error decoding access token:", error);
                        setError("Invalid login credentials or token. Please try again."); // Generic error message
                    }
                } else {
                    console.error("Access token is missing");
                }
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError("Login failed. An unexpected error occurred.");
        }
    };

    return (
        <section className="h-full w-full bg-gradient-to-bl from-white to-blue-50">
            <div className="flex flex-wrap items-center justify-center lg:justify-between">
                <div className="mb-10 md:mb-0 md:w-6/12 lg:w-5/12 xl:w-6/12">
                    <img
                        src={Left}
                        className="hidden items-center xl:block md:w-11/12 py-10 object-cover h-auto"
                        alt="SpeakUp"
                    />
                    {/* Gambar hanya ditampilkan untuk lebar layar minimal 1280px */}
                    <img
                        src={LeftFull}
                        className="custom-img items-center py-10 max-w-sm lg:max-w-lg"
                        alt="SpeakUp"
                    />
                </div>

                {/* <!-- Right column container with form --> */}
                <div className="md:w-6/12 lg:w-5/12 xl:w-4/12 px-6 md:px-12 md:mt-6 lg:mt-10 md:mr-0 xl:mr-32">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-xl text-center font-bold text-gray-800 my-10 inter-bold">
                            Welcome to <span className="primaryBlue">SpeakUp</span><span className="red">!</span>
                        </h2>

                        {/* <!-- Email input --> */}
                        <div className="mb-5 grid grid-cols-1">
                            <div className="flex justify-between">
                                <label className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
                                    Email
                                </label>
                            </div>
                            <input
                                label="Email address"
                                className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                type="email"
                                id="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* <!--Password input--> */}
                        <div className="mb-5 grid grid-cols-1">
                            <div className="flex justify-between">
                                <label className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
                                    Password
                                </label>
                            </div>
                            <input
                                label="Password"
                                className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* <!-- Display error message if any --> */}
                        {error && <div className="text-red-500 pb-3">{error}</div>}

                        {/* <!-- Submit button --> */}
                        <button
                            type="submit"
                            className="inline-block mb-36 w-full rounded bg-primaryBlue px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
