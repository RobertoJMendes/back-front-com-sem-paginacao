import db from "../db.js"
export const getUsers = async (req, res) => {
        try {
        //Recebe o número da página, quando não é enviado, é atribuido o pagina 1
        const {page=1} = req.query      //console.log(page)
        //Limite de registros em cada página
        const limit = 3
        //Variável com o némero da última página
        var lastPage = ""
        
        //Contar a quantidade de registros no banco //const registros = await db.query("SELECT COUNT(id) FROM usuarios")
        const registros = await db.query("SELECT COUNT(*) AS `count` FROM `usuarios`As `usuarios`") //console.log( Object.values(registros[0]))
        const registroFinal = registros[0] //console.log(registroFinal[0])
        const registroNumero = registroFinal[0] //console.log((registroNumero.count))
        const countUsuarios = registroNumero.count //console.log(countUsuarios)
        
        lastPage = Math.ceil(countUsuarios/limit)
        
        const offset = (page-1)*limit
        
        //const result = (await db.query("SELECT * FROM usuarios"))
        //const resultFinal = result[0] //console.log(result[0])
        const result = await db.query("SELECT * FROM usuarios limit ? offset ?", [limit,offset])

        //registroFinal = await db.query("SELECT * FROM usuarios limit ? offset ?", [limit,offset])
        return res.status(200).json({
                //resultpaginado,
                result,
                paginacao:{
                        page,
                        limit,
                        lastPage
                }
        })
        } catch (error) {
                return console.log("falhou!" )
        }
}
export const adicUser = async (req, res) => {
        let q = "INSERT INTO usuarios(`nome`,`email`,`fone`,`nascimento`)VALUES(?)";
        const values = [
                req.body.nome,
                req.body.email,
                req.body.fone,
                req.body.nascimento
        ]
        let resp = await db.query(q,[values],(err)=>{
                if(err) return res.json(err)
                        return res.status(200).json("Usuario criado!")
        })
        console.log(resp)
        return res.status(200).json("ok!")  
}
export const updateUser = async (req, res) => {
        let q = "UPDATE usuarios SET `nome` = ?,`email` = ?,`fone` = ?,`nascimento` = ? WHERE `id` =?";
        const values = [
                req.body.nome,
                req.body.email,
                req.body.fone,
                req.body.nascimento,
        ]
        let resp = await db.query( q, [...values, req.params.id], (err) => {
                if(err) return res.json(err)
                        return res.status(200).json("Usuario atualizado!")
        })
        console.log(resp)
}
export const deleteUser = async (req, res) => {
        
        let q = "DELETE FROM usuarios WHERE `id` =?";
        
        let resp = await db.query( q, [req.params.id], (err) => {
                if(err) return res.json(err)
                        return res.status(200).json("Usuario deletado!")
        })
        console.log(resp)
}
/*
if(countUsuarios !== 0){
        // calculo da última página - Math.ceil arredonda para cima
        //console.log(lastPage)
} else {
        if(!countUsuarios){
                return res.status(400).json({
                        mensagem:"Sem Usuários"
        })}}
                        */