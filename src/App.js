import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/textarea';
import React,{useState} from 'react' ;


function App() {
  const[textmode,textmode2] = useState('Enable dark mode');
  const[darkmode, lightmode] = useState('light');
  const togglemode= ()=>{
    if(darkmode === 'light'){
      lightmode('dark');
      textmode2('Disable dark mode');
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    }
    else{
      lightmode('light');
      textmode2('Enable dark mode');
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "grey";
    }
  }
  return (
    <>   
      <Navbar title="Textutils" darkmode={darkmode}  enablemode={togglemode} textmode={textmode} />     
      <Textarea darkmode={darkmode} />
   
    </>
  );
}

export default App;
