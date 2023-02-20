import { Router } from "express";
import {UserById, getUsers} from '../controller/controllerUser'

const router=Router()

router.get('/users',getUsers)
router.get('/user/:idUser',UserById)
// router.route('/users/:userId')
//     .get(UserById)

export default router

