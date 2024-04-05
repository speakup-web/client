import { useFormContext } from "react-hook-form";
import { findInputError } from './../../utils/findInputError'
import { isFormInvalid } from './../../utils/isFormInvalid'

export const Input = ({ label, type, id, name, placeholder }) => {
  const { register, formState: { errors } } = useFormContext();

  const inputError = findInputError(errors, label)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div className="flex flex-col w-full gap-2 relative">
      <div className="flex justify-between">
        <label htmlFor={id} className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        name={name}
        className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors[label] ? "border-red-500" : ""}`}
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
  );
};

const InputError = ({ message }) => {
  return (
    <p className="bottom-0 left-0 text-red-500 text-sm">{message}</p>
  )
}
