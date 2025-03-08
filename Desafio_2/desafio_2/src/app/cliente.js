'use client'

import { Input } from "./input"
import { Tabela } from "./tabela"
import { manda } from "./api/api"

export function Cliente(){
    return <div>
        <form onSubmit={(e) => {e.preventDefault(); manda()}} onClick={(e) => e.preventDefault()}>
        <Input ></Input>
        </form>
        <Tabela></Tabela>
    </div>
}