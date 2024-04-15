import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { reportService } from '../../api/reportService';
import { AuthContext } from '../../contexts/AuthContext';

const reportStatusList = [
  { title: 'Laporan Terkirim', value: 'submited' },
  {
    title: 'Laporan Diproses',
    value: 'on-progress',
  },
  { title: 'Laporan Selesai', value: 'done' },
  {
    title: 'Laporan Dibatalkan',
    value: 'canceled',
  },
];

export function DetailLaporan() {
  const { auth } = useContext(AuthContext);
  const { id: reportId } = useParams();
  const navigate = useNavigate();
  const [reportDetail, setReportDetail] = useState(null);
  const [reportStatus, setReportStatus] = useState(reportStatusList[0].value);

  async function fetchData() {
    try {
      const { data } = await reportService.getReportDetailById(
        reportId,
        auth.accessToken
      );

      if (data.incidentStatus.canceled) {
        setReportStatus(reportStatusList[3].value);
      } else if (data.incidentStatus.done) {
        setReportStatus(reportStatusList[2].value);
      } else if (data.incidentStatus.onProgress) {
        setReportStatus(reportStatusList[1].value);
      } else {
        setReportStatus(reportStatusList[0].value);
      }

      setReportDetail(data);
    } catch (err) {
      const { data } = err.response;
      const errMsg = `Incident report with ID ${reportId} not found`;
      if (data.message === errMsg) {
        navigate(`/dashboard/${auth.user.role}`);
      }
    }
  }

  async function handleStatusChange() {
    try {
      await reportService.putReportStatus(
        reportId,
        reportStatus,
        auth.accessToken
      );
      fetchData();
      alert('Successfully update report status');
    } catch (err) {
      const { data } = err.response;
      alert(data.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [reportId]);

  return (
    <div className="bg-white rounded-lg px-6 py-4">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Detail Laporan
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nama Pelapor
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {reportDetail?.reporterName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email Pelapor
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {reportDetail?.reporterEmail}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              No. Telepon Pelapor
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {reportDetail?.reporterPhone}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Lokasi Kejadian
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {reportDetail?.incidentLocation}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tanggal Kejadian
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {reportDetail &&
                format(reportDetail.incidentDate, 'PPPP', { locale: id })}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Detail Kejadian
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {reportDetail?.incidentDetail}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Status Laporan
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              <select
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="status"
                value={reportStatus}
                onChange={(e) => {
                  setReportStatus(e.target.value);
                }}
              >
                {reportStatusList.map((status, i) => (
                  <option key={i} value={status.value}>
                    {status.title}
                  </option>
                ))}
              </select>
            </dd>
          </div>
        </dl>
        <div className="mt-6 text-right">
          <button
            type="button"
            className="rounded bg-gray-600 px-4 py-2 text-sm font-medium leading-normal text-white mr-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            Kembali
          </button>
          <button
            type="button"
            className="rounded bg-sky-600 px-4 py-2 text-sm font-medium leading-normal text-white"
            onClick={handleStatusChange}
          >
            Ubah Status Laporan
          </button>
        </div>
      </div>
    </div>
  );
}
