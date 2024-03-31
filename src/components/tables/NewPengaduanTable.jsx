import React from 'react';
import { pengaduan } from "../../data";
import StatusDropdown from '../button/StatusDropdown';

function NewPengaduanTable() {
    // Urutkan array pengaduan berdasarkan createdAt
    const sortedPengaduan = pengaduan.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Ambil data dengan createdAt terbaru
    const latestPengaduan = sortedPengaduan[0];

    return (
        <section>
            <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse mr-11">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Name Pelapor
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Tanggal Kejadian
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Tempat Kejadian
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Detail Kejadian
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr key={latestPengaduan.id}>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {latestPengaduan.nama_pelapor}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                {latestPengaduan.tanggal_kejadian}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {latestPengaduan.tempat_kejadian}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {latestPengaduan.detail_kejadian}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <StatusDropdown/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default NewPengaduanTable;
