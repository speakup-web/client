import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Link } from 'react-router-dom';

function DaftarPengaduanTable({ reports }) {
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
              Email Pelapor
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
                    to={`detail-pengaduan/${report.id}`}
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
    </div>
  );
}

export default DaftarPengaduanTable;
