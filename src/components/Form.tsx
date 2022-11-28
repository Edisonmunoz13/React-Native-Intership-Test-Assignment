import { useForm } from "react-hook-form";
import "./form.css";
import { login } from "../api/";

type FormValues = {
  email: string;
  password: string;
};

type FormProps = {
  onLogin: () => void;
};

function Form({ onLogin }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    const result = await login(values);
    if (result.ok) {
      onLogin();
    } else {
      console.log(result.error);
    }
  };

  return (
    <section className="container">
      <img className="img" src="Combined Shape-custom.svg" alt="" />
      <div className="register">
        <div className="col-1">
          <h2 className="title"> Welcome, Stranger!</h2>
          <p className="subtitle">
            Please log in to this form if you wish to pass the exam.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="flex-col"
          >
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Incorrect format",
                },
              })}
              className={`input ${errors.email ? "error-case" : "input"}`}
              type="text"
              placeholder="Email"
            />
            {errors.email && (
              <label className="error">{errors.email.message} </label>
            )}
            <input
              {...register("password", { required: true })}
              className={`input ${errors.email ? "error-case" : "input"}`}
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="btn">
              Login
              <img className="arrow" src="Union.svg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
