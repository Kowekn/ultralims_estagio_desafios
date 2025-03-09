import { Ceps } from "./ceps";
import { Suspense } from "react";
import { ordem, bool } from "../tabela";

export function delete_row(id, cep){

    const resp =  fetch('http://localhost/backend_ultralims/?req=del', {
    
    method: 'POST',
     
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(cep),
  })
  .then(response =>
    response.json().then(data=> 
    
    alert(data))
  

   
)
  .catch((error) => {
    alert("Problema na conexão com banco de dados")
    return -1;
  })
  document.getElementById(id).remove()

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
  .catch((error)=>{
    
    
  })

 
  
  
  

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
      var reg = new RegExp('^[0-9]+$');
      var reg2 = new RegExp("[0-9]{5}[-]{1}[0-9]{3}")
    if(( Value.length == 8 && reg.test(Value))){
    let cep_pivo = Value.replace(/[^0-9]/, "");
      alert(cep_pivo)
    if(Value.length == 8 && Value.search(/[^0-9]/)){
    let parte1 = Value.substring(0,5)
    let parte2 = Value.substring(5)
    setValue(parte1 + "-" + parte2);
    }

     
      cep = cep_pivo
      
   }
  else if(Value.length == 9 && reg2.test(Value)){
    let part1 = Value.substring(0,5)
    let part2 = Value.substring(6)
    cep = parseInt(part1 + part2)
    
  }
//89204-415


},180)

   
      
  
      break;
  
   
   

    default:

      break;
      }
      
   
    
  }

    
 export async function manda(){
    if(cep.length < 8 ){
      alert("CEP inválido")
    }else{
      
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if(response.ok){
          alert('enviando...')
          response.json().then(
            data =>  {
              
              
              if(JSON.stringify(data) == '{"erro":"true"}'){
                alert("CEP inválido ")
              }else{
                insert(data)

              }
            
              }
          )
           }else{
            alert('CEP inválido')
        } })
        .catch((error) =>{
          alert("API ViaCep não responde")
        })
      
    

        
            
     
        
       
        
    
      }}




async function insert(dados){
  
  
    const resp = await fetch('http://localhost/backend_ultralims/?req=ins', {
    
    method: 'POST',
     
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(dados),
  })
  .then(response => response.json().then(data=> alert(data)))
  .catch((error) => {
    alert("Problema na conexão com banco de dados")
  })
  
  
  

  }