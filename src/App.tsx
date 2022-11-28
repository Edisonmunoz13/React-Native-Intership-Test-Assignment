import { useState } from "react";
import Form from "./components/Form";
import Layout from "./components/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return null;
  }
  return (
    <>
      <Layout />
      <Form onLogin={() => setIsLoggedIn(true)} />
    </>
  );
}

export default App;
