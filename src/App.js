import './App.css';
import React from "react";
import Tecla from './components/tecla';

function App(){

  let[result,setResult]= React.useState("");
  let[finalresult,setfinalresult]= React.useState(0);

  let handleclick=(value)=>{
    setResult(result+value)
    setfinalresult(value)
  }

  let getResult=()=>{
    setfinalresult(eval(result))
    setResult("")
  }

 

  return (
    <div className="container">
      <input className='input' value={finalresult}/>
      <div className='Calculadora'>
   <Tecla onClick={handleclick} value="0"/>
   <Tecla onClick={handleclick} value="1"/>
   <Tecla onClick={handleclick} value="2"/>
   <Tecla onClick={handleclick} value="3"/>
   <Tecla onClick={handleclick} value="4"/>
   <Text>TEste</Text>
   <Tecla onClick={handleclick} value="5"/>
   <Tecla onClick={handleclick} value="6"/>
   <Tecla onClick={handleclick} value="7"/>
   <Tecla onClick={handleclick} value="8"/>
   <Tecla onClick={handleclick} value="9"/>
   <Tecla onClick={handleclick} value="+"/>
   <Tecla onClick={handleclick} value="-"/>
   <Tecla onClick={handleclick} value="*"/>
   <Tecla onClick={handleclick} value="/"/>
   <Tecla onClick={getResult} value="="/>

    </div>
</div>
    
  );
}

export default App;
