import React, { useState } from "react";

export default function Contador() {
  const [num, setNum] = useState(0);


  return (
    <div>
      <h1> Contador </h1>
      <p> Você clicou {num} vezes! </p> 
      <button onClick={() => setNum(num + 1)}>Incremento</button>
      <br /> <br />
      <button onClick={() => setNum(num - 1)}>Decremento</button>
      <br /> <br />
    
    </div>
  );
}