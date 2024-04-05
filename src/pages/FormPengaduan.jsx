import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LogoForm from './../assets/logo/LogoForm.svg';
import { Input } from '../components/forms/Input';
import { InputTextArea } from '../components/forms/InputTextArea';
import { createIncidentReport } from '../api/api';

export default function Form() {
    const methods = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [incidentData, setIncidentData] = useState({
        reporterName: '',
        reporterEmail: '',
        reporterPhone: '',
        incidentLocation: '',
        incidentDate: new Date(),
        incidentDetail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncidentData({
            ...incidentData,
            [name]: value
        });
    };

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const response = await createIncidentReport(data);
            console.log('Incident report created:', response);
            const reportId = response.data.reportId;
            navigate(`/pantau-pengaduan/${reportId}`);
        } catch (error) {
            console.error('Error creating incident report:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div className='mx-auto'>Loading...</div>;
    }

    return (
        <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    noValidate
                    className='w-full max-w-[920px] bg-white rounded-lg mx-auto md:flex md:flex-col mb-16 mt-1'
                >
                    <div className="flex justify-center items-center">
                        <img src={LogoForm} alt="Logo Form" className="md:w-auto max-w-60 h-auto" />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Nama Pelapor"
                            type="text"
                            id="reporterName"
                            name="reporterName"
                            placeholder="Masukkan nama"
                            value={incidentData.reporterName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Email Pelapor"
                            type="email"
                            id="reporterEmail"
                            name="reporterEmail"
                            placeholder="Masukkan Email"
                            value={incidentData.reporterEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Telp Pelapor"
                            type="text"
                            id="reporterPhone"
                            name="reporterPhone"
                            placeholder="No. Telp"
                            value={incidentData.reporterPhone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Tempat Kejadian"
                            type="text"
                            id="incidentLocation"
                            name="incidentLocation"
                            placeholder="Masukkan Tempat Kejadian"
                            value={incidentData.incidentLocation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <Input
                            label="Tanggal Kejadian"
                            type="date"
                            id="incidentDate"
                            name="incidentDate"
                            value={incidentData.incidentDate}
                            onChange={(date) => {
                                setIncidentData({ ...incidentData, incidentDate: date });
                            }}
                        />
                    </div>
                    <div className="mb-5 grid grid-cols-1">
                        <InputTextArea
                            label="Detail Kejadian"
                            id="incidentDetail"
                            name="incidentDetail"
                            placeholder="Masukkan Detail Kejadian"
                            value={incidentData.incidentDetail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mt-6 gap-4'>
                        <button type="submit" className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 mr-4 text-center dark:hover:bg-blue-700 bg-darkBlue">Kirim Pengaduan</button>
                        <button className="text-white focus:ring-blue-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 text-center bg-white border border-blue-950 darkBlue"><a href='/'>Cancel</a></button>
                    </div>
                </form>
            </FormProvider>
        </section>
    );
}
