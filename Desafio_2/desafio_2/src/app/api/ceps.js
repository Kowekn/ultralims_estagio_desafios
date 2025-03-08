'use client'
import { use } from "react"
import { delete_row } from "./api"

export function Ceps({ ceps }){
  const cep = use(ceps)
  const css= `border-2 px-2 border-slate-100/20`
  
  return (cep.map(e => (
  
  
    <tr id={e.id}>
      <td className={css}>{e.cidade}</td>
      <td className={css}>{e.bairro}</td>
      <td className={css}>{e.estado}</td>
      <button type="button" className="p-2 cursor-pointer " onClick={()=> delete_row(e.id, e.cep)}>X</button>
  </tr>
  )))
}