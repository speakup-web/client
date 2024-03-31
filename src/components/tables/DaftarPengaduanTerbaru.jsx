import React from 'react';
import { pengaduan } from '../../data';

function DaftarPengaduanTable() {
    const sortedPengaduan = pengaduan.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-indigo-500">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nama Pelapor</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tanggal Kejadian</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tempat Kejadian</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Detail Kejadian</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {sortedPengaduan.map((pengaduan, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.nama_pelapor}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.email_pelapor}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.tanggal_kejadian}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.tempat_kejadian}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><a href={`/detail/${pengaduan.id}`} className='text-blue-600'>Detail</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DaftarPengaduanTable;
