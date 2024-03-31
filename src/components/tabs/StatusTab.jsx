import React from "react";
import AllStatusPengaduanTable from "../tables/AllStatusPengaduanTable";
import NewPengaduanTable from "../tables/NewPengaduanTable";
import PengaduanInProgressTable from "../tables/PengaduanInProgressTable";
import PengaduanSelesaiTable from "../tables/PengaduanSelesaiTable";
import PengaduanCancelTable from "../tables/PengaduanCancelTable";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap bg-white mt-8 py-4 px-6 rounded-lg">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-500"
                    : "text-" + color + "-500 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-500"
                    : "text-" + color + "-500 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 New
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-500"
                    : "text-" + color + "-500 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 In Progress
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-500"
                    : "text-" + color + "-500 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 Done
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-" + color + "-500"
                    : "text-" + color + "-500 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                 CANCELLED
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <AllStatusPengaduanTable/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <NewPengaduanTable/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <PengaduanInProgressTable/>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <PengaduanSelesaiTable/>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <PengaduanCancelTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function StatusTab() {
  return (
    <>
      <Tabs color="indigo" />;
    </>
  );
}