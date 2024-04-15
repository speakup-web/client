export const InputTextArea = (props) => {
  const { label, id, placeholder, register } = props;
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1"
        >
          {label}
        </label>
      </div>
      <textarea
        id={id}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};