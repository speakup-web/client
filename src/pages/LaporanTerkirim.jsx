import { useForm } from 'react-hook-form';
import LogoLaporan from './../assets/logo/Mail.svg';
import { FaArrowRightLong } from "react-icons/fa6";

export default function LaporanTerkirim() {
    const methods = useForm();

    const handlePantau = () => {
        window.location.href = '/pantau-pengaduan';
    };

    return (
        <section className="max-w-screen-lg mx-auto mt-20 px-4 sm:px-6 space-y-5" id='LaporanTerkirim1'>
            <h1 className="xl:text-4xl tracking-tight text-blue-950 sm:text-5xl text-center poppins-semibold">
                Pengaduan Terkirim
            </h1>
            <div className="flex justify-center items-center mt-5">
                <img src={LogoLaporan} alt="Mail" className="md:w-auto max-w-60 h-auto" />
            </div>
            <h1 className="xl:text-2xl mt-4 font-bold tracking-tight text-black sm:text-2xl text-center noto-sans-thin">
                Cek laporan kamu dengan langsung klik link berikut:
            </h1>
            <div className='mt-3 mb-10 flex justify-center items-center'>
                <button type="button" onClick={handlePantau} className="text-white hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-full text-sm flex items-center justify-center w-full sm:w-auto px-20 py-3 my-4 mb-20 mr-4 text-center dark:hover:bg-blue-600 bg-blue-500 poppins-semibold">
                    Pantau Pengaduan <span><FaArrowRightLong className="ml-3" /></span>
                </button>
            </div>
        </section>
    );
}
