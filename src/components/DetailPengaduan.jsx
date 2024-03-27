import React from "react";
import { pengaduan } from "../data";
import { HiCheck } from "react-icons/hi";

export default function DetailPengaduan() {
    return (
        <>
            <div id="detail-pengaduan">
                {pengaduan.filter(detail => detail.id === 1).map((detail, index) => (
                    <div key={index} className="border border-neutral-200 bg-white dark:border-neutral-600 rounded-t-lg shadow-xl">
                        <div className="border-b-2 p-4 text-lg">
                            <h2 className="mb-0 noto-sans-medium">
                                Detail Pengaduan
                            </h2>
                        </div>
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
                    </div>
                ))}
            </div>
        </>
    );
}
