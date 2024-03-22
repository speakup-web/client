import LogoLaporan from './../assets/logo/Mail.svg';
import { FaArrowRightLong } from "react-icons/fa6";

export function LaporanTerkirim() {
    return (
    <section className="max-w-screen-lg mx-auto mt-20 px-4 sm:px-6" id='LaporanTerkirim1'>
        <h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl text-center font-popins">
            Pengaduan Terkirim
        </h1>
        <div className="flex justify-center items-center mt-5">
            <img src={LogoLaporan} alt="Mail" className="md:w-auto max-w-60 h-auto" />
        </div>
        <h1 className="text-4xl mt-4 font-bold tracking-tight text-black sm:text-2xl text-center josefin-sans-regular">
            Cek email kamu atau bisa langsung klik link berikut:
        </h1>
        <div className='mt-3 mb-10 flex justify-center items-center'>
            <button type="submit" className="text-white hover:bg-blue-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm flex items-center justify-center w-full sm:w-auto px-20 py-2.5 my-4 mr-4 text-center dark:hover:bg-blue-600 bg-blue-500">
                Pantau Pengaduan <FaArrowRightLong className="ml-1 mt-1" />
            </button>
        </div>
    </section>
    )
}
