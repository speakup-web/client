import { useFormContext } from "react-hook-form";
import { findInputError } from './../../utils/findInputError'
import { isFormInvalid } from './../../utils/isFormInvalid'

export const InputTextArea = ({ label, type, id, name, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
                    {label}
                </label>
            </div>
            <textarea
                id={id}
                name={name}
                rows="4"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors[label] ? "border-red-500" : ""}`}
                placeholder={placeholder}
                {...register(name, {
                    required: {
                        value: true,
                        message: 'This field is required.',
                    },
                })}
            />
            {isInvalid && (
                <InputError
                    message={inputError.error.message}
                    key={inputError.error.message}
                />
            )}
        </div>
    )
}

const InputError = ({ message }) => {
    return (
      <p className="bottom-0 left-0 text-red-500 text-sm">{message}</p>
    )
  }
  