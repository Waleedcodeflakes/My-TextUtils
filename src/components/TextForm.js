import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleDownClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!", "success");
  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("Textarea has been cleared!", "success");

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // Functionality to copy the text
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
    props.showAlert("Coppied to clipboard!", "success");
    }

  // Functionality to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("White spaces removed!", "success");
  }

    const handleOnChange = (event) =>{
        // console.log("handleOnChange is clicked")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; wrong way to change the state text
    // setText = ("new text"); correct way to change the state text
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white": "black"}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode==="dark"?"#124b79": "white", color: props.mode==="dark"?"white": "black"}} rows="5"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={speak}>Speak</button>





    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white": "black"}}>
      <h1>Your text summary</h1>
<p><b>{text.trim() === '' ? 0 : text.match(/\S+/g).length}</b> words and <b>{text.replace(/\s+/g, '').length}</b> characters</p>
      {/* <p><b>{text.split(" ").length}</b> words <b>{text.length}</b> characters</p> */}
      <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
