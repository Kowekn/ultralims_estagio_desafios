
export const dynamic = 'force-dynamic'
import { useState} from 'react'
import {  select_ordem} from './api/api.js'
import Fetch_all from './api/api.js'

export var ordem = {id: 0, cidade: 0, bairro: 0, estado: 0 };
export var bool = true;

export function Tabela(){ 

    
      
       
        const [Cidade, setCidade] = useState(' ')
        const [Bairro, setBairro] = useState(' ')
        const [Estado, setEstado] = useState(' ')
        const [Ordem, setOrdem] = useState(' ')
        const [OrdemCampo, setOrdemCampo] = useState(' ')
        const [Campo, setCampo] = useState(' ')

function ordena(set, use, campo){
    const cid = [setCidade, setBairro, setEstado]
   setOrdem(cid.indexOf(set))
   cid.splice(cid.indexOf(set),1)
   cid[0](' ')
   cid[1](' ')
   setCampo(campo)
   if(use == ' ' || use == '↓'){
    set('↑')
    setOrdemCampo("ASC")
   }else {
       set('↓')
       setOrdemCampo("DESC")
   }
    
}



    

//nota: nao coloque tr diretamente embaixo de table, compilador reclama,

return  <div className='flex flex-row '>
    <table className="border-1 border-solid border-slate-100/20 p-2 ">
            <thead>
            <tr>

                
                <th className="select-none ">
                <label htmlFor='Cidade'  className='p-2 cursor-pointer'>Cidade 
                </label>
                <input id='Cidade' type='button' value={Cidade} className='p-2 mx-1  cursor-pointer' onClick={() => ordena(setCidade, Cidade, "cidade")} />
                </th>
               

                
                <th className="select-none">
                <label htmlFor='Bairro' className='p-2 cursor-pointer'>Bairro</label>
                <input id='Bairro' type='button' value={Bairro} className='p-2 mx-1  cursor-pointer' onClick={() => ordena(setBairro, Bairro, "bairro")}>
                </input>
                </th>
                

                
                <th className="select-none"><label htmlFor='Estado' className='p-2 cursor-pointer'>Estado</label>
                <input id='Estado' type='button' value={Estado} className='p-2 mx-1  cursor-pointer' onClick={() => ordena(setEstado, Estado, "estado")}></input></th>
                

                <th className="p-2">Delete</th>

            </tr>
            </thead>
            <tbody>

                <Fetch_all campo={Campo} ordem={OrdemCampo}></Fetch_all>

            </tbody>

          </table>
          
          <div>
          
          </div>
          </div> 

}