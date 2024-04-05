import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getIncidentReportById } from "../api/api";
import { HiCheck, HiOutlineLink } from "react-icons/hi";

export default function DetailPengaduan() {
    const { reportId } = useParams();
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const reportData = await getIncidentReportById(reportId);
                setReport(reportData);
                console.log(reportData)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching incident report:', error);
                setError('Error fetching incident report');
                setLoading(false);
            }
        };

        if (reportId) {
            fetchReport();
        }
    }, [reportId]);

    const copyLinkToClipboard = () => {
        const currentLink = `${window.location.origin}/pantau-pengaduan/${reportId}`;
        navigator.clipboard.writeText(currentLink);
        alert('Link telah disalin ke clipboard');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!report) {
        return <div>No data found for the specified report ID</div>;
    }

    return (
        <div id="detail-pengaduan">
            <div className="flex justify-between">
                <div></div>
                <button onClick={copyLinkToClipboard} className="mt-4 bg-[#39A7FF] hover:bg-[#FF5A6E] text-white font-bold py-2 px-4 rounded flex items-center">
                    <span className="mr-2"><HiOutlineLink /></span>
                    Salin Link Laporan
                </button>
            </div>
            <div className="border border-neutral-200 bg-white dark:border-neutral-600 rounded-t-lg shadow-xl">
                <div className="border-b-2 p-4 text-lg">
                    <h2 className="mb-0 noto-sans-medium">
                        Detail Pengaduan
                    </h2>
                </div>
                <div className="px-5 py-4">
                    <p className="mb-3 noto-sans-medium">Detail Kejadian</p>
                    <p className="mb-6 noto-sans-light">
                        {report.data.incidentDetail}
                    </p>
                    <p className="mb-3 noto-sans-medium">Tanggal Kejadian</p>
                    <p className="mb-6 noto-sans-light">
                        {report.data.incidentDate}
                    </p>
                    <p className="mb-3 noto-sans-medium">Tempat Kejadian</p>
                    <p className="mb-6 noto-sans-light">
                        {report.data.incidentLocation}
                    </p>
                    {/* Menampilkan progress */}
                    <p className="mb-3 noto-sans-medium">Progress</p>
                    {/* Render progress based on incident report status */}
                    {report.data.incidentStatus.submited && (
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
                    {report.data.incidentStatus.onProgress && (
                        <div className="max-w-lg my-6 flex text-start">
                            <div className="flex-shrink-0 mr-4">
                                <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center"><HiCheck /></p>
                            </div>
                            <div className="flex-grow">
                                <div className="">
                                    <p className="noto-sans-light pb-2">Laporan Diproses</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {report.data.incidentStatus.done && (
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
                    {report.data.incidentStatus.canceled && (
                        <div className="max-w-lg my-6 flex text-start">
                            <div className="flex-shrink-0 mr-4">
                                <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center"><HiCheck /></p>
                            </div>
                            <div className="flex-grow">
                                <div className="">
                                    <p className="noto-sans-light pb-2">Laporan Tidak Diproses</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
