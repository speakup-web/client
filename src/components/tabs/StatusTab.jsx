import AllStatusPengaduanTable from '../tables/AllStatusPengaduanTable';
import PengaduanInProgressTable from '../tables/PengaduanInProgressTable';
import PengaduanSelesaiTable from '../tables/PengaduanSelesaiTable';
import PengaduanCancelTable from '../tables/PengaduanCancelTable';

export default function StatusTab({
  openTab,
  setOpenTab,
  submitedReports,
  onProgressReports,
  doneReports,
  caneledReports,
  link,
}) {
  const color = 'indigo';

  return (
    <>
      <div className="flex flex-wrap bg-white mt-8 py-4 px-6 rounded-lg">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button
                className={
                  'text-xs font-bold uppercase px-5 py-3 rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + '-500'
                    : 'text-' + color + '-500 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Laporan Terkirim
              </button>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button
                className={
                  'text-xs font-bold uppercase px-5 py-3 rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color + '-500'
                    : 'text-' + color + '-500 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Laporan Diproses
              </button>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button
                className={
                  'text-xs font-bold uppercase px-5 py-3 rounded block leading-normal ' +
                  (openTab === 4
                    ? 'text-white bg-' + color + '-500'
                    : 'text-' + color + '-500 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Laporan Selesai
              </button>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button
                className={
                  'text-xs font-bold uppercase px-5 py-3 rounded block leading-normal ' +
                  (openTab === 5
                    ? 'text-white bg-' + color + '-500'
                    : 'text-' + color + '-500 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Laporan Dibatalkan
              </button>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <AllStatusPengaduanTable
                    submitedReports={submitedReports ?? []}
                    link={link}
                  />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <PengaduanInProgressTable
                    onProgressReports={onProgressReports ?? []}
                    link={link}
                  />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <PengaduanSelesaiTable
                    doneReports={doneReports ?? []}
                    link={link}
                  />
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'} id="link5">
                  <PengaduanCancelTable
                    caneledReports={caneledReports ?? []}
                    link={link}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
