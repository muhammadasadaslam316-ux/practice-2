import React, { useState } from 'react'


export default function Textform(props) {
  const [text,setText]=useState("Enter Text Here");

  const HandleOnChange=(event)=>{
    setText(event.target.value);
  }
  const Handleupclick=()=>{
    setText(text.toUpperCase());
  }
  const Handlecapclick=()=>{
    setText(text.toLowerCase().replace(/(^|\s)\S/g, (character) => character.toUpperCase()));
  }

 

  return (
    
    <div>
        <h1>{props.heading}</h1>
      <div className="form-field">
  <textarea className="form-control" id="fieldTextarea" rows="10" value={text} onChange={HandleOnChange}></textarea>
  <div className="form-text">
    < div className="container my-3">
   <div className="btn btn-primary mx-1" onClick={Handleupclick}>Convert to UpperCase</div>
   <div className="btn btn-primary mx-1" onClick={()=>setText(text.toLowerCase())}>Convert to LowerCase</div>
   <div className="btn btn-primary mx-1" onClick={()=>setText("")}>Empty</div>
   <div className="btn btn-primary mx-1" onClick={Handlecapclick}>Convert to capitalized Case</div>
  </div>
</div>
    </div>
     <div className="container my-3">
      <h1>Your Text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read time</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
   
  )

}
