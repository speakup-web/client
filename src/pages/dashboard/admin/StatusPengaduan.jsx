import { useContext, useEffect, useState } from 'react';
import StatusTab from '../../../components/tabs/StatusTab';
import { AuthContext } from '../../../contexts/AuthContext';
import { reportService } from '../../../api/reportService';

export function StatusPengaduan() {
  const { auth } = useContext(AuthContext);
  const [openTab, setOpenTab] = useState(1);
  const [submitedReports, setSubmitedReports] = useState(null);
  const [onProgressReports, setOnProgressReports] = useState(null);
  const [doneReports, setDoneReports] = useState(null);
  const [caneledReports, setCanceledReports] = useState(null);
  const link = `/dashboard/${auth.user.role}`;

  useEffect(() => {
    async function fetchData() {
      const { data: ar } = await reportService.getLatestReports(
        auth.accessToken,
        0,
        20,
        'submited'
      );
      setSubmitedReports(ar);

      const { data: pr } = await reportService.getLatestReports(
        auth.accessToken,
        0,
        20,
        'on-progress'
      );
      setOnProgressReports(pr);

      const { data: dr } = await reportService.getLatestReports(
        auth.accessToken,
        0,
        20,
        'done'
      );
      setDoneReports(dr);

      const { data: cr } = await reportService.getLatestReports(
        auth.accessToken,
        0,
        20,
        'canceled'
      );
      setCanceledReports(cr);
    }

    fetchData();
  }, [auth]);

  return (
    <main className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
      <div className="py-4">
        <h1 className="poppins-semibold text-2xl text-[#0B497B]">
          Daftar Pengaduan
        </h1>
        <div className="border-b-2 w-16 border-[#0B497B] pt-4" />
      </div>
      <div>
        <StatusTab
          openTab={openTab}
          setOpenTab={(tab) => {
            setOpenTab(tab);
          }}
          submitedReports={submitedReports?.results}
          onProgressReports={onProgressReports?.results}
          doneReports={doneReports?.results}
          caneledReports={caneledReports?.results}
          link={link}
        />
      </div>
    </main>
  );
}
