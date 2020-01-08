import React, { Component , useState } from "react";


function PasswordShowHide() {
    const [hidden, setHidden] = useState(true)
    const [password, setPassword] = useState("")
      return (
        <div>
          <input
            type={hidden ? "password" : "text"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
    <button onClick={()=> setHidden(!hidden) } > 
    <i class={hidden ?"eye slash icon" : "eye icon"}></i>  
    </button>
        </div>
      );
    }
  

export default PasswordShowHide;