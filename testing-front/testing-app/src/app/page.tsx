'use client'
import { useState } from "react";
import Axios from "axios";
export default function Home() {
  const [number, setNumber] = useState<number | undefined>(undefined);
  function sendNumber(){
    Axios.post('http://localhost:3003/addUser', {
      firstName:"hamza",
      lastName:"khanfara"
    }).then((resp) => {console.log(resp.data)}).catch((err) =>{console.log(err)})
  }
  return (
    <div>
      <h1>Testing Button</h1>
      <input type="number" placeholder="tets" onChange={(e) => { setNumber(Number(e.target.value)) }}/>
      <button onClick={sendNumber}>button Send</button>
    </div>
  );
}
