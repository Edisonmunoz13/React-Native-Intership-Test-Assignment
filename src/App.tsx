import { useState } from "react";
import Form from "./components/components/Form";
import Layout from "./components/layout/Layout";
import LoggedCard from "./components/components/LoggedCard";

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
      <Form onLogin={() => setIsLoggedIn(true)} />
    </>
  );
}

export default App;
