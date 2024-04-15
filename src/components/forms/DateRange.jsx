import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export function DateRange({ label, id }) {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
                    {label}
                </label>
            </div>
            <Datepicker id={id} value={value} onChange={handleValueChange} classNames="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    );
}
