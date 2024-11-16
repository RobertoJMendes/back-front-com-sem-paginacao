import styled from "styled-components"
import InputArea from "./compForm/compInputA/InputArea"
import Tabela from "./compForm/compTabela/Tabela"
//import { useState } from "react"

const Formulario = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
`
// eslint-disable-next-line react-hooks/rules-of-hooks
//const [onEdit, setEdit] = useState('')

function Form() {
    return (
        <Formulario>
            <InputArea
             //onEdit={onEdit} setEdit={setEdit}
              />
            <Tabela 
            //setEdit={setEdit} 
            />
        </Formulario>
    )
}
export default Form
