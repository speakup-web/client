import React from "react";
import { Input } from "./forms/Input";
import Left from './../assets/illustrations/Left.png'
import LeftFull from './../assets/illustrations/Left full ver.3.png'

export function SignIn() {
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
                    <form>
                        <h2 className="text-xl text-center font-bold text-gray-800 my-10 inter-bold">
                            Welcome to <span className="primaryBlue">SpeakUp</span><span className="red">!</span>
                        </h2>

                        {/* <!-- Email input --> */}
                        <div className="mb-5 grid grid-cols-1">
                            <Input
                                label="Email address"
                                type="email"
                                id="email"
                                placeholder="Email address"
                            />
                        </div>

                        {/* <!--Password input--> */}
                        <div className="mb-5 grid grid-cols-1">
                            <Input
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>

                        {/* <!-- Remember me checkbox --> */}
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-['']"
                                    type="checkbox"
                                    value=""
                                    id="remember"
                                    defaultChecked
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="exampleCheck3"
                                >
                                    Remember me
                                </label>
                            </div>

                            {/* <!-- Forgot password link --> */}
                            <a
                                href="#!"
                                className="text-primary primaryBlue transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button
                            type="button"
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
