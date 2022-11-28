import "./form.css";

export default function Form() {
  return (
    <section className="container">
      <div className="register">
        <div className="col-1">
          <h2 className="title"> Welcome, Stranger!</h2>
          <p className="subtitle">
            Please log in to this form if you wish to pass the exam.
          </p>
          <form id="form" className="flex-col">
            <input className="input" type="text" placeholder="Email" />
            <input className="input" type="text" placeholder="Password" />
            <button className="btn"> Login </button>
          </form>
        </div>
      </div>
    </section>
  );
}
