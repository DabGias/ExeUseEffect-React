import { useState } from "react";
import Aviao from "./components/Aviao";

function App() {
  const [aviao, setAviao] = useState(false)

  return (
    <>
      {aviao === true ? <Aviao/> : ""}
      <br/>
      <br/>
      <button onClick={() => {setAviao(!aviao)}}>
        {aviao === false ? "Decolar!" : "Derrubar!"}
      </button>
    </>
  )
}

export default App;
