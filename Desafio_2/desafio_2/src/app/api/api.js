import { Ceps } from "./ceps";
import { Suspense } from "react";
import { ordem, bool } from "../tabela";

export function delete_row(id, cep){

    try{const resp =  fetch('http://localhost/backend_ultralims/?req=del', {
    
    method: 'POST',
     
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(cep),
  })
  .then(response => response.json().then(data=> 
    
    alert(data)
   
))
  document.getElementById(id).remove()

}

 

  catch{


  }
  
    
    
}



export  default  function Fetch_all({ordem, campo}){
  console.log("" + ordem)
  console.log("" , campo)
  const resp = fetch('http://localhost/backend_ultralims/?' + new URLSearchParams({
    ordem: ordem,
    campo: campo
  }).toString(), {
    method: 'GET',

  
  })
  .then(response => response.json())
  .then(data =>  data)

 
  
  
  

  return (<Suspense fallback={<tr><td>Loading...</td></tr>} >
      <Ceps ceps={resp}></Ceps>
    </Suspense>)
   } 
  



var cep = ''
export const VerificaInput = (e, setValue, index , Value) => {
    
  switch (index) {
    
    
    case 8:

    setTimeout(async function faz() {
      Value = e.target.value
    if((Value.length == 9 || Value.length == 8)){
    let cep_pivo = Value.replace(/[^0-9]/, "");

    if(Value.length == 8 && Value.search(/[^0-9]/)){
    let parte1 = Value.substring(0,5)
    let parte2 = Value.substring(5)
    setValue(parte1 + "-" + parte2);
    }

     
      cep = cep_pivo
    
    
    

      

  }},500)

   
      
  
      break;
  
   
   

    default:

      break;
      }
      
   
    
  }

    
 export async function manda(){
    if(cep.length < 8 ){
      alert(cep)
    }else{
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if(response.ok){
          alert('cep válido, enviando...')
          response.json().then(
            data =>  insert(data)
          )
           

        }else{
            alert('cep inválido')
        }
            
      })
        
       
        
    
      }}


export function select_ordem(e){
    switch (e) {
        case 0:
          statements
        case 1:
          statements
        // …
        case 2:
          statements
        default:
            alert('Nenhuma Ordem selecionada')
          break;
      }
}

async function insert(dados){
  
  const resp = await fetch('http://localhost/backend_ultralims/?req=ins', {
    
    method: 'POST',
     
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(dados),
  })
  .then(response => response.json().then(data=> alert(data)))
  
  

  }