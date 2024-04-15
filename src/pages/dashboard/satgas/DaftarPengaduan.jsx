import DaftarPengaduanTable from "../../../components/tables/DaftarPengaduanTable";

export default function DaftarPengaduan() {
  return (
    <>
      <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
        <div className="py-4">
          <h1 className="poppins-semibold text-2xl text-[#0B497B]">Daftar Semua Pengaduan</h1>
          <div className="border-b-2 w-16 border-[#0B497B] pt-4"/>
        </div>
        <div className="my-4 py-2">
          <DaftarPengaduanTable/>
        </div>
      </section>
    </>
  )
}