import express from 'express'
import { adicUser, deleteUser, getUsers, updateUser } from '../controller/usuarios.js'

const router = express.Router()

router.get("/", getUsers)
router.post("/", adicUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router