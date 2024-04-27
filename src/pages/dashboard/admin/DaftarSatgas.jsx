import DaftarSatgasTable from '../../../components/tables/DaftarSatgasTable';
import { FormSatgas } from '../../../components/FormSatgas';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { userService } from '../../../api/userService';

export function DaftarSatgas() {
  const { auth } = useContext(AuthContext);
  const [taskforces, setTaskforces] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await userService.getTaskforces(auth.accessToken, 20);
      setTaskforces(data);
    }

    fetchData();
  }, [auth, counter]);

  return (
    <main className="max-w-screen-lg mx-auto mt-1 px-4 sm:px-6">
      <div className="py-4">
        <h1 className="poppins-semibold text-2xl text-[#0B497B]">
          Akun Satgas
        </h1>
        <div className="border-b-2 w-16 border-[#0B497B] pt-4" />
      </div>
      <div className="flex flex-col md:flex-row my-4 py-2 space-y-4 md:space-y-0 md:space-x-6">
        <div className="p-4 border bg-white rounded-lg" style={{ width: '1000px', height: 'auto', padding: '30px' }}>
          <FormSatgas
            incrementCounter={() => {
              setCounter(counter + 1);
            }}
          />
        </div>
        <div className="lg:w-full md:w-1/2">
          <DaftarSatgasTable taskforces={taskforces?.results ?? []} />
        </div>
      </div>
    </main>
  );
}
