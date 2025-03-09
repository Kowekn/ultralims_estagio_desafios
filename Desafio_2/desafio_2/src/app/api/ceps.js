'use client'
import { use } from "react"
import { delete_row } from "./api"

export function Ceps({ ceps }){
  const cep = use(ceps)
  const css= `border-1 px-2 border-slate-100/20`
  try {
    return (cep.map(e => (
  
  
    <tr key={e.id} id={e.id} >
      <td  className={css}>{e.cidade}</td>
      <td  className={css}>{e.bairro}</td>
      <td  className={css}>{e.estado}</td>
      <td  className={css + ` cursor-pointer text-center text-red-900/90`}><button type="button" 
       onClick={()=> delete_row(e.id, e.cep)}>X</button></td>
  </tr>
  )))
  } catch (error) {
    return <tr><td>Sem conexão com banco de dados</td></tr>
  }
  
}