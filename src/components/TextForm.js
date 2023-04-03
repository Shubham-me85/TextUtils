import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
         let newText = text.toLowerCase();
         setText(newText);
     }
 
    const handleOnChange = (event)=>{
       // console.log("OnChange");
        setText(event.target.value);
    }

    const handleClearText = ()=>{
        let newText = ' ';
        setText(newText);
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ,]+/);
        setText(newText.join(" "));
    }
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042649'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042649'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042649'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} charcters</p>
            <p>{text.split(" ").length *.008} Minutes Read</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:'Enter Something in Textbox to Preview it here'}</p>
        </div>
        </>
    )
}