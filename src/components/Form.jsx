import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LogoForm from './../assets/logo/LogoForm.svg';

export function Form() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
            <form className='w-full max-w-[920px] bg-white rounded-lg mx-auto md:flex md:flex-col mb-16 mt-1'>
                <div className="flex justify-center items-center">
                    <img src={LogoForm} alt="Logo Form" className="max-w-full h-auto"/>
                </div>
                <div className="mb-5 grid grid-cols-1">
                    <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-900 dark:text-blue-400 ml-1">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Masukkan Nama" required />
                </div>
                <div className="mb-5 grid grid-cols-1">
                    <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 dark:text-blue-400 ml-1">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Masukkan Email" required />
                </div>
                <div className="mb-5 grid grid-cols-1">
                    <label htmlFor="telepon" className="mb-2 text-sm font-medium text-gray-900 dark:text-blue-400 ml-1">No. Telp</label>
                    <input type="text" id="telepon" className="bg-gray-50 border border-gray-300 text-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Masukkan No. Telp" required />
                </div>
                <div className="mb-5 grid grid-cols-1">
                    <label htmlFor="tempat" className="mb-2 text-sm font-medium text-gray-900 dark:text-blue-400 ml-1">Tempat Kejadian</label>
                    <input type="text" id="tempat" className="bg-gray-50 border border-gray-300 text-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Masukkan Tempat Kejadian" required />
                </div>
                <div className="mb-5 grid grid-cols-1">
                    <label htmlFor="tempat" className="mb-2 text-sm font-medium text-gray-900 dark:text-blue-400 ml-1">Tanggal</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className="bg-gray-50 border border-gray-300 text-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                        placeholderText="DD-MM-YY"
                        required
                    />
                </div>
                <div className="mb-5 grid grid-cols-1">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-400 ml-1">Detail Kejadian</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Detail Kejadian.." required ></textarea>
                </div>
                <div>
                    <label className="ml-1 block mb-2 text-sm font-medium text-gray-900 dark:text-blue-400" htmlFor="user_avatar">Upload Bukti</label>
                    <input className="block w-full text-sm text-blue-400 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-blue-400 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>
                </div>
                <div className='mt-6'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </section>
    );
}
