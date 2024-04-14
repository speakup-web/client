import { useContext, useEffect, useState } from 'react';
import DaftarPengaduanTable from '../../../components/tables/DaftarPengaduanTable';
import { AuthContext } from '../../../contexts/AuthContext';
import { reportService } from '../../../api/reportService';

export function DaftarPengaduan() {
  const { auth } = useContext(AuthContext);
  const [reports, setReports] = useState(null);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const isLastPage = reports?.count > 0 && offset + 4 >= reports?.count;

  const fetchReports = async (newOffset) => {
    const { data } = await reportService.getLatestReports(
      auth.accessToken,
      newOffset
    );
    setReports(data);
    setOffset(newOffset);
    setCurrentPage(Math.floor(newOffset / 4) + 1);
  };

  const nextPage = () => {
    fetchReports(offset + 10);
  };

  const prevPage = () => {
    const newOffset = Math.max(offset - 10, 0);
    fetchReports(newOffset);
  };

  useEffect(() => {
    fetchReports(offset);
  }, [auth]);

  return (
    <>
      <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
        <div className="py-4">
          <h1 className="poppins-semibold text-2xl text-[#0B497B]">
            Daftar Semua Pengaduan
          </h1>
          <div className="border-b-2 w-16 border-[#0B497B] pt-4" />
        </div>
        <div className="my-4 py-2">
          <DaftarPengaduanTable
            reports={reports?.results ?? []}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            isLastPage={isLastPage}
            link={`/dashboard/admin`}
          />
        </div>
      </section>
    </>
  );
}
