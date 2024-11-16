///* eslint-disable react/prop-types */
import { CtnrArea, InputA, Label, Input, Btn } from "./compStCss"
import { 
    //useEffect,
     useState } from "react"
import axios from "axios"
//import { useRef } from "react"

function InputArea (
//    {onEdit}
){
    
    const [ data, setData ] = useState({ nome:'', email:'', fone:'', nascimento:''})
    const [ aviso, setAviso ] = useState("")
    const valorInput = e => setData({...data, [e.target.name]: e.target.value})
    
    const headers = {'headers':{'Content-Type':'application/json'}}
    const sendMsg = async (e) => {    
    e.preventDefault();        
    
    await axios.post('http://localhost:3000/', data, headers)
    
    .then(() => {

        setAviso("Criado!")
        setData({ nome:'', email:'', fone:'', nascimento:'' })
        
    }).catch(() => {

        setAviso("falhou")
        console.log("falhou!!!")
        return
    })
    }
//    const ref = useRef()
    /*useEffect(()=>{
        if(onEdit){
            const user = ref.current
            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.fone.value = onEdit.fone;
            user.nascimento.value = onEdit.nascimento;
        }
    })*/

    return(
        <CtnrArea onSubmit={sendMsg} 
        //ref={ref}
        >
            {aviso ? <p>{aviso}</p> : ""}
        <InputA>
            <Label>Nome</Label>
            <Input name="nome" onChange={valorInput} value={data.nome}/>
        </InputA>
        <InputA>
            <Label>Email</Label>
            <Input name="email" type="email" onChange={valorInput} value={data.email} />
        </InputA>
        <InputA>
            <Label>Telefone</Label>
            <Input name="fone" onChange={valorInput} value={data.fone}/>
        </InputA>
        <InputA>
            <Label>Data Nascimento</Label>
            <Input name="nascimento" type="date" onChange={valorInput} value={data.nascimento} />
        </InputA>
        <Btn type="submit">Salvar !</Btn>
        </CtnrArea>
    )
}
export default InputArea
