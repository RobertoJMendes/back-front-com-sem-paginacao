import db from "../db.js"

export const selectUser = async(req, res) => {
        const id = req.params.id
        let q = "SELECT * FROM usuarios WHERE ID=?"
                let resultado = await db.query( q, [id],(err,result) => {
                        if(err){
                                console.log("aqui")
                                return res.status(200).json("Usuario Não Selecionado!")
                        }
                        console.log("aqui")
                        return res.status(200).json({resultado,result})
        })
        } 
export const getUsers = async (req, res) => {
        try {
        const message = "Ok!"
        const result = await db.query("SELECT * FROM usuarios")
        const resultFinal = result[0]
        return res.status(200).json({
                resultFinal, message
        })
} catch (error) {
                const message = "Falhou"
                return res.status(400).json({message}) 
        }
        //console.log("falhou!" )
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
