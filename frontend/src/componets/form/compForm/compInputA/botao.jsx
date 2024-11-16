import styled from "styled-components";
/*
const DivBtn = styled.div`
    display: flex; height: 100%;    
`*/
const Btn = styled.button`
    padding: 10px; cursor: pointer; border-radius: 5px; border: none; background-color: #2c73d2; color: white; height: 42px; width: 84px;    
`
function Botao (){
    return(
        <Btn type="submit" >Salvar</Btn>
    )
}
export default Botao
//<DivBtn></DivBtn>        