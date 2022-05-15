import React, {useState} from 'react'

export default function TextFrom(props) {
    
    const handleUpClick =() =>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UPPER case", "success");
    }
    const handleDownClick =() =>{
        // console.log('lowercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success");

    }
    const handleClearClick =() =>{
        // console.log('lowercase was clicked' + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text has been removed", "success");

    }
    const handleUpfirstClick =() =>{
        // console.log('lowercase was clicked' + text)
        // let word = text.split(" ")
        // let newText = word[0].charAt(0).toUpperCase() + text.slice(1);
        var capitalizedString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
        var words = text.split(" ").map(capitalizedString);
        var newText = words.join(" ");
        setText(newText)
        props.showAlert("First letter of each word Capitalized", "success");

    }
    const handleCopy =() =>{
        // console.log('lowercase was clicked' + text)
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");

    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
        
    }
    const handleOnChange =(event) =>{
        // console.log('On change')
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    // setText("Next Text");
    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#213e7c'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#213e7c'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleUpfirstClick}>First letter of word uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#213e7c'}}>
        <h1>your text summary</h1>
        <p>{text.trim().length=== 0?0: text.trim().split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    
    </>
    
  ) 
}
