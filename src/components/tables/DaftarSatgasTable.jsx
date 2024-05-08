import { Link } from 'react-router-dom';
import { EditButton } from '../button/EditButton';
import { DeleteButton } from '../button/DeleteButton';

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
                  <Link to={`/dashboard/admin/edit-taskforce?email=${taskforce.email}`}>
                    <EditButton/>
                  </Link>
                  <DeleteButton email={taskforce.email} />
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
