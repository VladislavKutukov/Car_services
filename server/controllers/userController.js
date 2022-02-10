

const ApiErorr = require('../error/ApiErorr');

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    
    async login (req, res,next){
        const {email,password}=req.body
        const user = await User.findOne ({where:{email}})
        if(!user){
            return next(ApiErorr.internal("Пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        
        if(!comparePassword){
            return next(ApiErorr.internal ("Указан не верный пароль"))
        }
        const token = generateJwt (user.id,user.email,user.role)
        return res.json({token})
    }

    async check(req, res,next){
        const {id}=req.query
        if(!id){
            next(ApiErorr.badRequest('Не заадн ID'))
        }
        res.json(id);
    }
}
module.exports = new UserController()