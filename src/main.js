import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


// background color changer

function Main(){

    console.log("change");

    const [color,setColor] = useState("black")

    // document.body.style.backgroundColor = color;


    // useEffect

    useEffect(()=>{
        document.body.style.backgroundColor = color;
        console.log("useEffect");
    },[color])

    // console.log("ok");


    return(
        <>
            <h1>Background Color Changer</h1>
            <div className="container">
                <button style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
                <button style={{backgroundColor:"green"}}onClick={() => setColor("green")}>Green</button>
                <button style={{backgroundColor:"blue"}}onClick={() => setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"yellow"}}onClick={() => setColor("yellow")}>Yellow</button>
                <button style={{backgroundColor:"pink"}}onClick={() => setColor("pink")}>Pink</button>
            </div>
        </>
        
    )

}

const ReactRoot = ReactDOM.createRoot(document.getElementById('root'))
ReactRoot.render(<Main/>)