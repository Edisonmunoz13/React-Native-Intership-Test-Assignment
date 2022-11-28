import "./loggedCard.css";

function LoggedCard() {
  return (
    <>
      <section className="container">
        <img className="img" src="Combined Shape-custom.svg" alt="" />
        <div className="logged">
          <img className="avatar" src="avatar.jpeg" alt="" />
          <h2>That's it, Elon!</h2>
          <button className="btn-out">
            <img className="out-icon" src="Logout.svg" alt="" />
            Logout
          </button>
        </div>
      </section>
    </>
  );
}

export default LoggedCard;
