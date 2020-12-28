import React from "react"
import { useState } from "react"

function Counter(){
    const[count, setcount] = useState(0);

    return(
        <div>
            <button onClick= { () => setcount(count + 1)}>add one</button>
            <div>{count}</div>
        </div>
    );
}

export default Counter;