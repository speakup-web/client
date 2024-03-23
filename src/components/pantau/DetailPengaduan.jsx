import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { pengaduan } from "../../data";
import { HiCheck } from "react-icons/hi";

export default function DetailPengaduan() {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        setActiveElement((prev) => (prev === value ? "" : value));
    };

    return (
        <>
            <div id="accordionExample">
                {pengaduan.filter(detail => detail.id === 1).map((detail, index) => (
                    <div key={index} className="border border-neutral-200 bg-white dark:border-neutral-600 rounded-t-lg">
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base darkBlue noto-sans-medium transition hover:z-[2] focus:z-[3] focus:outline-none ${activeElement === "detail" ? "text-primary" : ""
                                    } dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                onClick={() => handleClick("detail")}
                                aria-expanded={activeElement === "detail"}
                                aria-controls="collapseOne"
                            >
                                Detail Pengaduan
                                <span className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out ${activeElement === "detail" ? "rotate-[-180deg] -mr-1" : ""
                                    } dark:fill-blue-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <TECollapse show={activeElement === "detail"} className="!mt-0 !rounded-b-none !shadow-none">
                            <div className="px-5 py-4">
                                <p className="mb-3 noto-sans-medium">Nama Pelapor</p>
                                <p className="mb-6 noto-sans-light">
                                    {detail.nama_pelapor}
                                </p>
                                <p className="mb-3 noto-sans-medium">Email Pelapor</p>
                                <p className="mb-6 noto-sans-light">
                                    {detail.email_pelapor}
                                </p>
                                <p className="mb-3 noto-sans-medium">No. Telp Pelapor</p>
                                <p className="mb-6 noto-sans-light">
                                    {detail.telp_pelapor}
                                </p>
                                <p className="mb-3 noto-sans-medium">Detail Kejadian</p>
                                <p className="mb-6 noto-sans-light">
                                    {detail.detail_kejadian}
                                </p>
                                <p className="mb-3 noto-sans-medium">Tanggal Kejadian</p>
                                <p className="mb-6 noto-sans-light">
                                    {detail.tanggal_kejadian}
                                </p>
                                <p className="mb-3 noto-sans-medium">Tempat Kejadian</p>
                                <p className="mb-6 noto-sans-light">
                                    {detail.tempat_kejadian}
                                </p>
                                {/* Menampilkan progress */}
                                <p className="mb-3 noto-sans-medium">Progress</p>
                                {detail.status_pengaduan.submited && (
                                    <div className="max-w-lg my-6 flex text-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center"><HiCheck /></p>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="">
                                                <p className="noto-sans-light pb-2">Laporan Terkirim</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {detail.status_pengaduan.inProgress && (
                                    <div className="max-w-lg my-6 flex text-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center"><HiCheck /></p>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="">
                                                <p className="noto-sans-light pb-2">Laporan diproses</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {detail.status_pengaduan.cancelled && (
                                    <div className="max-w-lg my-6 flex text-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center"><HiCheck /></p>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="">
                                                <p className="noto-sans-light pb-2">Laporan Dibatalkan</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {detail.status_pengaduan.done && (
                                    <div className="max-w-lg my-6 flex text-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center"><HiCheck /></p>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="">
                                                <p className="noto-sans-light pb-2">Laporan Selesai</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </TECollapse>
                    </div>
                ))}
            </div>
        </>
    );
}
