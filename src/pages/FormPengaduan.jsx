import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import LogoForm from './../assets/logo/LogoForm.svg';
import { Input } from '../components/forms/Input';
import { InputTextArea } from '../components/forms/InputTextArea';
import { DatePicker } from '../components/forms/DatePicker';
import FileInput from '../components/forms/InputFile';

export default function Form() {
    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        // Navigasi ke halaman "Laporan Terkirim" dengan menambahkan hash "#LaporanTerkirim1"
        window.location.href = '/laporan-terkirim#LaporanTerkirim1';
    });

    return (
        <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
            <FormProvider {...methods}>
                <form
                    onSubmit={e => e.preventDefault()}
                    className='w-full max-w-[920px] bg-white rounded-lg mx-auto md:flex md:flex-col mb-16 mt-1'
                >
                    <div className="flex justify-center items-center">
                        <img src={LogoForm} alt="Logo Form" className="md:w-auto max-w-60 h-auto" />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Nama Pelapor"
                            type="text"
                            id="name"
                            placeholder="Masukkan nama"
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Email Pelapor"
                            type="email"
                            id="email"
                            placeholder="Masukkan Email"
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="No. Telp Pelapor"
                            type="text"
                            id="telp"
                            placeholder="Masukkan No. Telp"
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Tempat Kejadian"
                            type="text"
                            id="tempat"
                            placeholder="Masukkan Tempat Kejadian"
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <DatePicker label="Tanggal Kejadian" id="date"/>
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <InputTextArea
                            label="Detail Kejadian"
                            id="message"
                            placeholder="Masukkan Detail Kejadian"
                        />
                    </div>
                    {/*<div className="mb-5 grid grid-cols-1">
                        <FileInput label="Upload Bukti" id="bukti" />
                        </div>*/
                    }
                    <div className='mt-6 gap-4'>
                        <button type="submit" onClick={onSubmit} className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 mr-4 text-center dark:hover:bg-blue-700 bg-darkBlue">Kirim Pengaduan</button>
                        <button className="text-white focus:ring-blue-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 text-center bg-white border border-blue-950 darkBlue"><a href='/'>Cancel</a></button>
                    </div>
                </form>
            </FormProvider>
        </section>
    );
}
