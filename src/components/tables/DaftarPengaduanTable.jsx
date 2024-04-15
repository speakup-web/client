import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Link } from 'react-router-dom';

function DaftarPengaduanTable({
  reports,
  currentPage,
  nextPage,
  prevPage,
  isLastPage,
  link,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-indigo-500">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Nama Pelapor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Tanggal Kejadian
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Detail Kejadian
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.length ? (
            reports.map((report) => (
              <tr key={report.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {report.reporterName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {report.reporterEmail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(report.incidentDate, 'PPPP', { locale: id })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`${link}/detail-pengaduan/${report.id}`}
                    className="text-blue-600"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="px-6 py-4 text-center w-full text-gray-600"
              >
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>

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
            disabled={isLastPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextPage}
                disabled={isLastPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaftarPengaduanTable;
