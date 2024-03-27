import React from 'react';
import LogoPantauPengaduan from './../assets/logo/Logo pantau pengaduan.svg';
import DetailPengaduan from '../components/DetailPengaduan';

export default function PantauPengaduanPage() {
    return (
        <section className="h-full max-w-screen-lg mx-auto mt-1 mb-10 px-4 sm:px-6">
            <div className="flex justify-center items-center m-10">
                <img src={LogoPantauPengaduan} alt="Logo Form" className="md:w-auto max-w-60 h-auto" />
            </div>
            <DetailPengaduan />
        </section>
    );
}
