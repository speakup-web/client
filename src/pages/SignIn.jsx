import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { Input } from '../components/forms/Input';
import Left from './../assets/illustrations/Left.png';
import LeftFull from './../assets/illustrations/Left full ver.3.png';
import { authService } from '../api/authService';
import { AuthContext } from '../contexts/AuthContext';

export function SignIn() {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const { auth, setAuth } = useContext(AuthContext);

  async function onSubmit(formData) {
    try {
      const {
        data: { accessToken },
      } = await authService.postAuthLogin(formData);
      reset();
      const { name, role } = JSON.parse(atob(accessToken.split('.')[1]));
      setAuth({ accessToken, user: { name, role } });
      navigate(`/dashboard/${role}`);
    } catch (err) {
      const { data } = err.response;
      alert(data.message);
    }
  }

  if (auth !== null) {
    return <Navigate to={`/dashboard/${auth.user.role}`} replace={true} />;
  }

  return (
    <section className="h-full w-full bg-gradient-to-bl from-white to-blue-50">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        <div className="mb-10 md:mb-0 md:w-6/12 lg:w-5/12 xl:w-6/12">
          <img
            src={Left}
            className="hidden items-center xl:block md:w-11/12 py-10 object-cover h-auto"
            alt="SpeakUp"
          />
          <img
            src={LeftFull}
            className="custom-img items-center py-10 max-w-sm lg:max-w-lg"
            alt="SpeakUp"
          />
        </div>

        <div className="md:w-6/12 lg:w-5/12 xl:w-4/12 px-6 md:px-12 md:mt-6 lg:mt-10 md:mr-0 xl:mr-32">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-xl text-center font-bold text-gray-800 my-10 inter-bold">
              Welcome to <span className="primaryBlue">SpeakUp</span>
              <span className="red">!</span>
            </h2>

            <div className="mb-5 grid grid-cols-1">
              <Input
                label="Email address"
                type="email"
                id="email"
                placeholder="Email address"
                register={register('email')}
              />
            </div>

            <div className="mb-5 grid grid-cols-1">
              <Input
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                register={register('password')}
              />
            </div>

            <button
              type="submit"
              className="inline-block mb-36 w-full rounded bg-primaryBlue px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
