import { FormProvider } from "react-hook-form";
import { Input } from "../../../components/forms/Input";
import DaftarSatgasTable from "../../../components/tables/DaftarSatgasTable";
import { FormSatgas } from "../../../components/FormSatgas";
import StatusTab from "../../../components/tabs/StatusTab";

export default function DaftarSatgas() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
        <div className="py-4">
          <h1 className="poppins-semibold text-2xl text-[#0B497B]">Status Pengaduan</h1>
          <div className="border-b-2 w-16 border-[#0B497B] pt-4" />
        </div>
        <div>
          <StatusTab/>
        </div>
      </main>
    </>
  );
}
