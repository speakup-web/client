import { FormProvider } from "react-hook-form";
import { Input } from "./forms/Input";

export function FormSatgas() {
    return (
        <section>
            <FormProvider>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="bg-white rounded-lg p-6"
                >
                    <div className="mb-5">
                        <Input
                            label="Nama"
                            type="text"
                            id="name"
                            placeholder="Masukkan nama"
                        />
                    </div>
                    <div className="mb-5">
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            placeholder="Masukkan Email"
                        />
                    </div>
                    <div className="mb-5">
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Masukkan Password"
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="text-white hover:bg-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 my-4 text-center bg-indigo-500">
                            Buat Akun
                        </button>
                    </div>
                </form>
            </FormProvider>
        </section>
    )
}