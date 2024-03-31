import { FormProvider } from "react-hook-form";
import { Input } from "../../../components/forms/Input";
import DaftarSatgasTable from "../../../components/tables/DaftarSatgasTable";
import { FormSatgas } from "../../../components/FormSatgas";

export default function DaftarSatgas() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
        <div className="py-4">
          <h1 className="poppins-semibold text-2xl text-[#0B497B]">Daftar Satgas</h1>
          <div className="border-b-2 w-16 border-[#0B497B] pt-4" />
        </div>
        <div className="flex flex-col md:flex-row my-4 py-2 space-y-4 md:space-y-0 md:space-x-6">
          <div className="lg:w-full md:w-1/2">
            <FormSatgas/>
          </div>
          <div className="lg:w-full md:w-1/2">
            <DaftarSatgasTable />
          </div>
        </div>
      </main>
    </>
  );
}
