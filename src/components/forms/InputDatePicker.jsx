import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const InputDatePicker = ({ label, id }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
                    {label}
                </label>
            </div>
            <DatePicker
                id={id}
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                className="bg-gray-50 border border-gray-300 text-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                placeholderText="DD-MM-YY"
            />
        </div>
    );
}
