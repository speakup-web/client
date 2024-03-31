import { HiArrowNarrowRight } from "react-icons/hi";
import { UsersIcon, InboxArrowDownIcon, ArrowPathIcon , CheckCircleIcon  } from '@heroicons/react/24/outline';

import DaftarPengaduanTerbaruTable from "../../../components/tables/DaftarPengaduanTerbaru";
import DaftarSatgasTable from "../../../components/tables/DaftarSatgasTable";
import DaftarPengaduanDiprosesTable from "../../../components/tables/DaftarPengaduanDiprosesTable";
import Card from "../../../components/Cards/Card";

export default function AdminDashboardHome() {
  return (
    <>
      <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6 space-y-10">
        <div className="flex space-x-4">
          <Card icon={UsersIcon} title="Pelapor" value="50"/>
          <Card icon={InboxArrowDownIcon} title="Pengaduan" value="4"/>
          <Card icon={ArrowPathIcon } title="In Progress" value="2"/>
          <Card icon={CheckCircleIcon } title="Done" value="0"/>
        </div>
        <div className="bg-white rounded-lg px-6 py-4 w-full">
          <div className="py-4">
            <h1 className="poppins-semibold text-[#0B497B]">Daftar Satgas</h1>
            <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
          </div>
          <div className="my-4 py-2">
            <DaftarSatgasTable />
          </div>
          <div className="flex items-center justify-start my-4">
            <a
              href="/dashboard/admin/daftar-satgas"
              className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600"
            >
              View More
              <HiArrowNarrowRight className="ml-2" />
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg px-6 py-4 w-full">
          <div className="py-4">
            <h1 className="poppins-semibold text-[#0B497B]">Daftar Pengaduan Terakhir</h1>
            <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
          </div>
          <div className="my-4 py-2">
            <DaftarPengaduanTerbaruTable />
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
            <h1 className="poppins-semibold text-[#0B497B]">Daftar Pengaduan Diproses</h1>
            <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
          </div>
          <div className="my-4 py-2">
            <DaftarPengaduanDiprosesTable />
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
  )
}
