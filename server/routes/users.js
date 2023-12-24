import express from 'express';

import { login, signup, reset } from '../controllers/auth.js'
import { getAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

router.delete('/delete/:id',reset)

export default router