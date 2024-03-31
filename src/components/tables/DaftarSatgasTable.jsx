import React from 'react';
import { satgas } from '../../data';

function DaftarSatgasTable() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-indigo-500">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nama</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Option</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {satgas.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.nama}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><a href='' className='text-blue-600'>Detail</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DaftarSatgasTable;
