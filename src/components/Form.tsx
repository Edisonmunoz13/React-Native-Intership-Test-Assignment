import "./form.css";

function Form() {
  return (
    <div>
      <section className="container">
        <img className="img" src="Combined Shape-custom.svg" alt="" />
        <div className="register">
          <div className="col-1">
            <h2 className="title"> Welcome, Stranger!</h2>
            <p className="subtitle">
              Please log in to this form if you wish to pass the exam.
            </p>
            <form id="form" className="flex-col">
              <input className="input" type="text" placeholder="Email" />
              <input className="input" type="text" placeholder="Password" />
              <button className="btn">
                Login
                <img className="arrow" src="Union.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
