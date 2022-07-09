import { useState } from "react";


const FunctionComponent=()=>{
    const [pcount, setCount]=useState(0);
    
   
    const increament=()=>{
        setCount(pcount +1)
    }
   
   const decreament=()=>{
    setCount(pcount -1)
   }



    return (
    <div className="component">
      <h1>Count your Number {pcount}</h1>
      <button onClick={increament}>Up</button>
      <button onClick={decreament}>Down</button>
    </div>
    );
}
export default FunctionComponent;