import { useState } from "react";
import { manda, VerificaInput } from "./api/api";

export function Input(){

    const [CEP, setCEP] = useState('')
    
    
      {                 /*Titulo,   required     type      pattern                    codigo  State         setState        max-size */}
    const cep_input =  ["CEP",   "unrequired", "text",   "[0-9]{5}[-]{1}[0-9]{3}",       8,   CEP,        setCEP,            "9" ]  
     
    
    
    
    return <div>
   
        <label> Digite o CEP:
        <input placeholder="8900-800" id="input" onInput={e =>VerificaInput(e, cep_input[6], cep_input[4], cep_input[5]) }
            value={cep_input[5]} onPaste={e =>VerificaInput(e, cep_input[6], cep_input[4], cep_input[5])}  onChange={e => cep_input[6](e.target.value)} pattern={cep_input[3]}  maxLength={cep_input[7]}/>
        <span 
        ></span>
        <button type="button" className="p-2 cursor-pointer bg-pink-900/10 rounded-lg" onClick={()=> manda()}>Enviar dados</button>
        </label>
    </div>
}