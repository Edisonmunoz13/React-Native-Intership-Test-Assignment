import "./loggedCard.css";

function LoggedCard() {
  const logOut = () => {
    window.location.reload();
  };

  return (
    <>
      <section className="container">
        <img className="img" src="Combined Shape-custom.svg" alt="" />
        <div className="logged">
          <img className="avatar" src="avatar.jpeg" alt="" />
          <h2>That's it, Elon!</h2>
          <button className="btn-out" onClick={logOut}>
            <img className="out-icon" src="Logout.svg" alt="" />
            Logout
          </button>
        </div>
      </section>
    </>
  );
}

export default LoggedCard;
