import express from 'express'
const router=express.Router()
import rateLimiter from 'express-rate-limit'

const apiLimiter=rateLimiter({
    windowMs:20*60*1000,
    max:10,
    message:'too many requests from this ip try again after 20 minutes'
})
import{register,login,updateUser,getCurrentUser,logOut} from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
router.route('/register').post(apiLimiter,register)
router.route('/login').post(apiLimiter,login)
router.route('/updateUser').patch(authenticateUser,updateUser)
router.route('/getCurrentUser').get(authenticateUser,getCurrentUser)
router.route('/logout').get(logOut)

export default router