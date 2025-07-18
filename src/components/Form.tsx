import type { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  textarea?: boolean;
  rows?: number;
  register: ReturnType<UseFormRegister<any>>;
}

const Form: React.FC<Props> = ({
  id,
  label,
  type = "text",
  placeholder,
  error,
  textarea,
  rows,
  register,
}) => (
  <div className={`${error ? "error" : ""}`}>
    <label htmlFor={id} className="block mb-[0.5rem] font-600 mt-2">
      {label}
      {error && typeof error.message === "string" && (
        <span className="text-red-600 italic ml-1">{error.message}</span>
      )}
    </label>
    {textarea ? (
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        {...register}
        className="w-full px-3 py-4 border-2 rounded text-[0.75rem] bg-gray-100 placeholder:italic placeholder:text-[0.75rem] mb-1 resize-y m-h-[120px]"
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full placeholder:italic p-1 mr-4 text-[0.75rem] placeholder:text-[0.75rem] outline-1 rounded bg-gray-100 focus:ring-2"
      />
    )}
  </div>
);

export default Form;
