const userService = require('../../services/userService')


const userController = {
    registerUser : async (req,res,next) =>{
        try {
            const {name,email,password} = req.body
            const {data} = await userService.signUp({name,email,password})
            return res.json(data)
        } catch (error) {
            next(err)
        }
       

    },
    loginUser  : async (req,res,next) =>{
        try {
            const {email,password} = req.body
            const {data} = await userService.login({email,password})
            return res.json(data)
        } catch (error) {
            next(err)
        }
    },
    getUsers :async (req,res,next) =>{
        try {
            const {data} = await userService.getAllUsers()
            return res.json(data)
        } catch (error) {
            next(error)
        }
    },
    updateUser :(req,res,next) =>{

    },
    deleteUser :(req,res,next) =>{

    },
}

module.exports = userController