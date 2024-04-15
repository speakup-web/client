import React from "react";
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function FileInput({ label, id }) {
    const handleFileInputChange = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
                    {label}
                </label>
            </div>
            <div
                className="p-4 flex flex-col items-center gap-2 bg-babyBlue primaryBlue rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={handleFileInputChange}
            >
                <HiOutlineCloudUpload className="w-6 h-6" />
                <span>Upload Bukti Kejadian</span>
                <input type="file" id="fileInput" className="hidden" />
            </div>
        </div>
    );
}
