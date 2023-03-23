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
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>

        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} charcters</p>
            <p>{text.split(" ").length *.008} Minutes Read</p>
            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}