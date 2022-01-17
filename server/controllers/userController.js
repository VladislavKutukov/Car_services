const { noExtendLeft } = require('sequelize/types/lib/operators');
const ApiErorr = require('../error/ApiErorr');
class UserController{
    async registration (req, res){

    }

    async login (req, res){
        
    }

    async check(req, res,next){
        const {id}=req.query
        if(!id){
            next(ApiErorr.badRequest('nНе заадн ID'))
        }
        res.json(id);
    }
}
module.exports = new UserController()