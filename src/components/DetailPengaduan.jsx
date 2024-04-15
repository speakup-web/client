import { HiCheck, HiX } from 'react-icons/hi';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function DetailPengaduan({ report }) {
  return (
    <>
      <div id="detail-pengaduan">
        <div className="border border-neutral-200 bg-white dark:border-neutral-600 rounded-t-lg shadow-xl">
          <div className="border-b-2 p-4 text-lg">
            <h2 className="mb-0 noto-sans-medium">Detail Pengaduan</h2>
          </div>
          <div className="px-5 py-4">
            <p className="mb-3 noto-sans-medium">Detail Kejadian</p>
            <p className="mb-6 noto-sans-light">{report.incidentDetail}</p>
            <p className="mb-3 noto-sans-medium">Tanggal Kejadian</p>
            <p className="mb-6 noto-sans-light">
              {format(report.incidentDate, 'PPPP', { locale: id })}
            </p>
            <p className="mb-3 noto-sans-medium">Tempat Kejadian</p>
            <p className="mb-6 noto-sans-light">{report.incidentLocation}</p>
            <p className="mb-3 noto-sans-medium">Progress</p>
            <div className="max-w-lg my-6 flex text-start">
              <div className="flex-shrink-0 mr-4">
                <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center">
                  <HiCheck />
                </p>
              </div>
              <div className="flex-grow">
                <div className="">
                  <p className="noto-sans-light pb-2">Laporan Terkirim</p>
                </div>
              </div>
            </div>
            <div className="max-w-lg my-6 flex text-start">
              <div className="flex-shrink-0 mr-4">
                <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center">
                  {report.incidentStatus.onProgress ? <HiCheck /> : <HiX />}
                </p>
              </div>
              <div className="flex-grow">
                <div className="">
                  <p className="noto-sans-light pb-2">Laporan diproses</p>
                </div>
              </div>
            </div>
            {report.incidentStatus.canceled && (
              <div className="max-w-lg my-6 flex text-start">
                <div className="flex-shrink-0 mr-4">
                  <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center">
                    <HiCheck />
                  </p>
                </div>
                <div className="flex-grow">
                  <div className="">
                    <p className="noto-sans-light pb-2">Laporan Dibatalkan</p>
                  </div>
                </div>
              </div>
            )}
            <div className="max-w-lg my-6 flex text-start">
              <div className="flex-shrink-0 mr-4">
                <p className="text-white bg-customRed rounded-full w-8 h-8 flex items-center justify-center">
                  {report.incidentStatus.done ? <HiCheck /> : <HiX />}
                </p>
              </div>
              <div className="flex-grow">
                <div className="">
                  <p className="noto-sans-light pb-2">Laporan Selesai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}