import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;

  className?: string;
}

const TextArea = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={rest.id} className="mr-auto text-base text-lightOffWhite">
        {label}
      </label>
      <textarea
        type="text"
        {...rest}
        onChange={rest.onChange}
        className={`h-20 w-full rounded-md border-0 bg-lightOffWhite px-6 py-4 outline-none focus:border focus:border-primaryColor ${className ? className : ""}`}
      />
    </div>
  );
};

export default TextArea;
