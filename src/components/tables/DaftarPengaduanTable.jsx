import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { pengaduan } from '../../data';

function DaftarPengaduanTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Ubah jumlah item per halaman sesuai kebutuhan

    // Menghitung index awal dan akhir item untuk halaman saat ini
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pengaduan.slice(indexOfFirstItem, indexOfLastItem);

    // Mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Array untuk menampilkan angka halaman
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pengaduan.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                    {currentItems.map((pengaduan, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.nama_pelapor}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.email_pelapor}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.tanggal_kejadian}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pengaduan.tempat_kejadian}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><a href='' className='text-blue-600'>Detail</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 mt-4 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === pageNumbers.length}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {pageNumbers.map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)} // Menangani klik pada angka halaman
                                    className={`relative inline-flex items-center ${currentPage === number ? 'bg-indigo-500 text-white' : 'text-gray-900'
                                        } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0 hover:bg-gray-50`}
                                >
                                    {number}
                                </button>
                            ))}
                            <button
                                onClick={nextPage}
                                disabled={currentPage === pageNumbers.length}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                            <span className="font-medium">{Math.min(indexOfLastItem, pengaduan.length)}</span> of{' '}
                            <span className="font-medium">{pengaduan.length}</span> results
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaftarPengaduanTable;
