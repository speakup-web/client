import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoPantauPengaduan from './../assets/logo/Logo pantau pengaduan.svg';
import DetailPengaduan from '../components/DetailPengaduan';
import { reportService } from '../api/reportService';

export function PantauPengaduan() {
  const navigate = useNavigate();
  const location = useLocation();
  const [report, setReport] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const reportId = new URLSearchParams(location.search).get('reportId');
        const { data } = await reportService.getReportDetailById(reportId);
        setReport(data);
      } catch (err) {
        navigate('/lapor');
      }
    }

    fetchData();
  }, []);

  return (
    <section className="h-full max-w-screen-lg mx-auto mt-1 mb-10 px-4 sm:px-6">
      <div className="flex justify-center items-center m-10">
        <img
          src={LogoPantauPengaduan}
          alt="Logo Form"
          className="md:w-auto max-w-60 h-auto"
        />
      </div>
      {report && <DetailPengaduan report={report} />}
    </section>
  );
}
