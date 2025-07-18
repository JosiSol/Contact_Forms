import { useState } from "react";
import Form from "./Form";
import { useForm } from "react-hook-form";

const Contact = () => {
  interface Props {
    name: string;
    email: string;
    message: string;
  }
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ mode: "onChange" });

  const onSubmit = (data: Props) => {
    setSuccess("Successfully Submitted");
    console.log(data);
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="m-w-[600px] m-[2rem] p-[2.5rem] rounded box-border flex flex-col justify-center items-center">
      <div className="p-16 border-2 rounded-2xl">
        <div className="mb-[1rem]">
          <h1 className="font-bold">Contact Us</h1>
          <p className="text-gray-600 italic font-[1rem]">
            We would like to hear from you
          </p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="relative mb-[1.5rem]"
        >
          <Form
            id="name"
            label="Your Name"
            type="text"
            placeholder="John Doe"
            register={register("name", {
              required: "*",
            })}
            error={errors.name}
          />
          <Form
            id="email"
            label="Your Email"
            type="email"
            placeholder="john@email.com"
            register={register("email", {
              required: "*",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "*",
              },
            })}
            error={errors.email}
          />
          <Form
            id="message"
            label="Your Suggestions"
            textarea
            rows={5}
            placeholder="We would love to hear your suggestions"
            register={register("message", {
              required: "*",
              maxLength: {
                value: 250,
                message: "Cannot Exceed 250 characters",
              },
            })}
            error={errors.message}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 p-2 my-2 text-gray-200 cursor-pointer rounded-xl col-2"
          >
            Submit
          </button>
        </form>
        {success && (
          <>
            <div className="rounded-2xl flex justify-center ">{success}</div>
            <button
              className="bg-blue-600 text-gray-200 rounded-2xl flex justify-center p-2 mt-2 w-full cursor-pointer hover:bg-blue-800"
              onClick={reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
