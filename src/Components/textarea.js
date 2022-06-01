import React, {useState} from 'react'



export default function Textarea(props) {
    const capitalize = ()=>{
        let p = text.toUpperCase();
        SetText(p);        
    }
    const small = ()=>{
        let s = text.toLowerCase();
        SetText(s);
    }
    const clear = ()=>{
        let c = "";
        SetText(c);
    }
    const copy = ()=>{
        let g = document.getElementById("mybox");
        // g.select()
        navigator.clipboard.writeText(g.value);
    }
    const Onchange = (event)=> {        
        SetText(event.target.value);         
    }
    const [text, SetText] = useState('');
  return (
      <>
    <div className='container my-3'>
        <div className="mb-3 my-3">
            <h1>Analyze your text</h1>
            <textarea className="form-control" style={{ backgroundColor: props.darkmode==='dark'?'#042743':'white', color: props.darkmode==='dark'?'white':'black', cursor: props.darkmode==='dark'?'primary':'black'}}value={text}  id="mybox" onChange={Onchange} rows="8"></textarea>
            <button className='btn btn-primary my-2' onClick={capitalize}>Capitalize</button>
            <button className='btn btn-primary my-2 m-2' onClick={small}>Smaller</button>
            <button className='btn btn-primary my-2' onClick={clear}>Clear</button>
            <button className='btn btn-primary my-2 m-2' onClick={copy}>Copy text</button>
        </div>
    </div>
    <div className='container my-3'>
        <h2>Summary preview</h2>
        <p>{text.length>0?text.trim().split(" ").length:0} Words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Type something to preview"}</p>
    </div>

    </>
  )
}
