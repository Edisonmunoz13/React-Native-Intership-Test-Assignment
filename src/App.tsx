import { useState } from "react";
import Form from "./components/Form";
import Layout from "./components/Layout";
import LoggedCard from "./components/LoggedCard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <>
        <LoggedCard />
      </>
    );
  }
  return (
    <>
      <Layout />
      <Form onLogin={() => setIsLoggedIn(true)} />
    </>
  );
}

export default App;
