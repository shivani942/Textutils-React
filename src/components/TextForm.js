import React,{useState} from 'react';

export default function TextForm(props) {
    const upperCase = ()=>{
        setText(text.toUpperCase())
        props.showAlert("success","Converted to uppercase");
    }
    const lowerCase = ()=>{
        setText(text.toLowerCase())
        props.showAlert("success","Converted to Lowercase");
    }
    const clearText = ()=>{
        let text = '';
        setText(text)
        props.showAlert("success","Text has been cleared");
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("success","Text has been copied");
    }
    const removeSpaces =()=>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(' ')); 
        props.showAlert("success","Text has been removed");
    }
    
    // this will speak jb tk ura read na kr liya
    // const speak = () => {
        //     let msg = new SpeechSynthesisUtterance();
        //     msg.text = text;
        //     window.speechSynthesis.speak(msg);
        // }
        
        // this will speak and stop if we toggled
        const speak = () => {
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            const toogle = document.getElementById('toggle')
            if (toogle.textContent === "Speak") {
                toogle.innerHTML = "Stop"
                props.showAlert("success","speaking");
            }
            else {
                toogle.innerHTML = "Speak"
                if (toogle.innerHTML === "Speak"){
                    props.showAlert("success","stop");
                    window.speechSynthesis.cancel()
                }
            }
        }
        
        const handlerOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const [text,setText] = useState('');
    return(
        <>
        <div className="container" style={{color: (props.mode === "dark") ? "white" :"#042743"}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: (props.mode === "dark") ? "#13466e" :"white", color: (props.mode === "dark") ? "white" :"#042743"}} onChange={handlerOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upperCase}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={lowerCase}>Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove Spaces</button>
            <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-1 my-2" id="toggle">Speak</button>
        </div>
        <div className="container my-3" style={{color: (props.mode === "dark") ? "white" :"#042743"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s/).filter((e)=>{return e.length !== 0}).length} words and {text.length} character</p>
            <p>It takes {0.008 * text.split(' ').filter((e)=>{return e.length !== 0}).length} Minutes to read the text</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ?text : "Nothing to Preview"}</p>
        </div>
        </>
    );
}
