import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  UsersIcon,
  InboxArrowDownIcon,
  ArrowPathIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

import DaftarPengaduanTerbaruTable from '../../../components/tables/DaftarPengaduanTerbaru';
import DaftarPengaduanDiprosesTable from '../../../components/tables/DaftarPengaduanDiprosesTable';
import Card from '../../../components/Cards/Card';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { reportService } from '../../../api/reportService';

export function SatgasDashboardHome() {
  const { auth } = useContext(AuthContext);
  const [reportStats, setReportStats] = useState(null);
  const [latestReports, setLatestReports] = useState(null);
  const [inProgressReports, setInProgressReports] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data: rs } = await reportService.getReportStats(auth.accessToken);
      setReportStats(rs);

      const {
        data: { results: lr },
      } = await reportService.getLatestReports(auth.accessToken);
      setLatestReports(lr);

      const {
        data: { results: lpr },
      } = await reportService.getLatestInProgressReports(auth.accessToken);
      setInProgressReports(lpr);
    }

    fetchData();
  }, [auth]);

  return (
    <>
      <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6 space-y-10">
        <div className="flex space-x-4">
          <Card
            icon={UsersIcon}
            title="Pelapor"
            value={reportStats?.totalReporters}
          />
          <Card
            icon={InboxArrowDownIcon}
            title="Laporan Diterima"
            value={reportStats?.submitedReports}
          />
          <Card
            icon={ArrowPathIcon}
            title="Laporan Diproses"
            value={reportStats?.onProgressReports}
          />
          <Card
            icon={CheckCircleIcon}
            title="Laporan Selesai"
            value={reportStats?.doneReports}
          />
        </div>
        <div className="bg-white rounded-lg px-6 py-4 w-full">
          <div className="py-4">
            <h1 className="poppins-semibold text-[#0B497B]">
              Daftar Pengaduan Terakhir
            </h1>
            <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
          </div>
          <div className="my-4 py-2">
            <DaftarPengaduanTerbaruTable reports={latestReports ?? []} />
          </div>
          <div className="flex items-center justify-start my-4">
            <a
              href="/dashboard/admin/daftar-pengaduan"
              className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600"
            >
              View More
              <HiArrowNarrowRight className="ml-2" />
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg px-6 py-4 w-full">
          <div className="py-4">
            <h1 className="poppins-semibold text-[#0B497B]">
              Daftar Pengaduan Diproses
            </h1>
            <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
          </div>
          <div className="my-4 py-2">
            <DaftarPengaduanDiprosesTable reports={inProgressReports ?? []} />
          </div>
          <div className="flex items-center justify-start my-4">
            <a
              href="/dashboard/admin/status-pengaduan"
              className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600"
            >
              View More
              <HiArrowNarrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
