import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import LogoForm from './../assets/logo/LogoForm.svg';
import { Input } from '../components/forms/Input';
import { InputTextArea } from '../components/forms/InputTextArea';
import { DatePicker } from '../components/forms/DatePicker';
import { reportService } from '../api/reportService';

export function FormPengaduan() {
  const navigate = useNavigate();
  const { handleSubmit, register, setValue, reset } = useForm();

  async function onSubmit(formData) {
    try {
      const {
        data: { reportId },
      } = await reportService.postReport(formData);
      reset();
      navigate('/laporan-terkirim', { state: { reportId } });
    } catch (err) {
      const { data } = err.response;
      alert(data.message);
    }
  }

  return (
    <section className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[920px] bg-white rounded-lg mx-auto md:flex md:flex-col mb-16 mt-1"
      >
        <div className="flex justify-center items-center">
          <img
            src={LogoForm}
            alt="Logo Form"
            className="md:w-auto max-w-60 h-auto"
          />
        </div>
        <div className="mb-5 grid grid-cols-1">
          <Input
            label="Nama Pelapor"
            type="text"
            id="name"
            placeholder="Masukkan nama"
            register={register('reporterName')}
          />
        </div>
        <div className="mb-5 grid grid-cols-1">
          <Input
            label="Email Pelapor"
            type="email"
            id="email"
            placeholder="Masukkan Email"
            register={register('reporterEmail')}
          />
        </div>
        <div className="mb-5 grid grid-cols-1">
          <Input
            label="No. Telp Pelapor"
            type="text"
            id="telp"
            placeholder="Masukkan No. Telp"
            register={register('reporterPhone')}
          />
        </div>
        <div className="mb-5 grid grid-cols-1">
          <Input
            label="Tempat Kejadian"
            type="text"
            id="tempat"
            placeholder="Masukkan Tempat Kejadian"
            register={register('incidentLocation')}
          />
        </div>
        <div className="mb-5 grid grid-cols-1">
          <DatePicker
            label="Tanggal Kejadian"
            id="date"
            setValue={(value) => {
              setValue('incidentDate', value);
            }}
          />
        </div>
        <div className="mb-5 grid grid-cols-1">
          <InputTextArea
            label="Detail Kejadian"
            id="message"
            placeholder="Masukkan Detail Kejadian"
            register={register('incidentDetail')}
          />
        </div>
        <div className="mt-6 gap-4">
          <button
            type="submit"
            className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 mr-4 text-center dark:hover:bg-blue-700 bg-darkBlue"
          >
            Kirim Pengaduan
          </button>
          <button className="text-white focus:ring-blue-950 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 text-center bg-white border border-blue-950 darkBlue">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    </section>
  );
}
