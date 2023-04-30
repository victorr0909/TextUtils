import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!" , "success");
    }
    const handleLoClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!" , "success");
    }
    const handleToClick =()=>{
        let newText =("");
        setText(newText);
        props.showAlert("Text Cleared!" , "success");
    }
    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
        }
    const handleCopy =()=>{
            console.log("On Copy");
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to Clipboard!" , "success");
            }    
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!" , "success");
    }
    const [text, setText]=useState('');
        return (
            <>
            <div className="container"  style={{color : props.mode===`dark`?`white`:`#08303f`}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">      
                    <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor : props.mode===`light`?`white`:`grey` , color : props.mode===`dark`?`white`:`#08303f`}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleToClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>
            <div className="container my-3"  style={{color : props.mode===`dark`?`white`:`#08303f`}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} , {text.length} Characters</p>
                <p>{0.08 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
            </>
  )
}

