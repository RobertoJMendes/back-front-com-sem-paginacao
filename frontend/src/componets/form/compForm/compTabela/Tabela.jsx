import { FaTrash, FaEdit} from "react-icons/fa"
import { Tbl,Thead,Tr,Th,Td,Tbody } from "./compStCss"
import { useEffect, useState } from "react"
import axios from "axios"

const Tabela = () => {
  /*  const handleEdit = (item) => {
      console.log(item)
      setEdit(item)
    }*/
    const local = "http://localhost:4000/"
    const [usuarios, setUsers] = useState([])
    const getUsers = async () => {
  try {
    let res = await axios.get(local)
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)))
      console.log(res.data)
    } catch (error) {
      return error
    }
  }
  useEffect(()=>{
    getUsers()
    },[setUsers])

    return(
      <Tbl >
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th /*onlyWeb*/ >Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {usuarios.map((item,i) => (
                    <Tr key={i}>
                    <Td width="30%">{item.nome}</Td>
                    <Td width="30%">{item.email}</Td>
                    <Td width="20%" /*onlyWeb */ >{item.fone}</Td>
                    <Td width="5%" /*alignCenter*/ > <FaEdit
                    //onClick={ () => handleEdit(item) }
                     /> </Td>
                    <Td width="5%" 
                    //alignCenter
                    > <FaTrash 
                    //onClick={ () => handleDel(item.id) }
                    /> </Td>
                    </Tr>))}
            </Tbody>
        </Tbl>
    )
  }
  export default Tabela
  
  /* 
      const handleEdit = (item) => {
        setOnEdit(item)
        console.log(onEdit)
      }
      const handleDel = async (id) => {
        await axios.delete(local+id).then(() => {
          const newArray = usuarios.filter((user) => user.id !== id)
          setUsers(newArray)
        })
      }*/
  //setUsers={setUsers} setOnEdit={setOnEdit}