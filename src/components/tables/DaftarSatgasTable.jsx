import { FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";


function DaftarSatgasTable({ taskforces }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-indigo-500">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Nama
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {taskforces.length ? (
            taskforces.map((taskforce) => (
              <tr key={taskforce.id}>
                <td className="px-6 py-4 whitespace-nowrap">{taskforce.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{taskforce.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/dashboard/admin/edit-satgas`}>
                    <div
                      className="border border-indigo-600 hover:bg-indigo-600 focus:bg-indigo-600 focus:text-white hover:text-white font-bold py-2 px-4 rounded mr-3"
                      style={{ width: '60px', height: '40px', display: 'inline-flex', alignItems: 'center' }}
                    >
                      <FiEdit2 className="h-5 w-5 mr-2 text-indigo-600 hover:text-white" />
                    </div>
                  </Link>
                  <div
                    className="border border-red-600 hover:bg-red-600 text-white hover:text-white font-bold py-2 px-4 rounded"
                    style={{ width: '60px', height: '40px', display: 'inline-flex', alignItems: 'center' }}
                  >
                    <MdOutlineDelete className="h-5 w-8 mr-2 text-red-500 hover:text-white" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center w-full text-gray-600">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DaftarSatgasTable;
