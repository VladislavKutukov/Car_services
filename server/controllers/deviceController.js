const uuid = require('uuid')
const path = require ('path');
const {Device} = require('..//models/models')
const ApiErorr = require('../error/ApiErorr');

class DeviceController{
    async create (req, res,next){
        try{
        const {name,price,brandId}=req.body
        const {img}=req.files
        let fileName= uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const device = await Device.create({name, price, brandId, img: fileName});

        return res.json(device)
        } 
        
        catch(e){
            next(ApiErorr.badRequest(e.message))
        }
                
    }   

    async getAll (req, res){
        
        const {brandId,limit,page} = req.query
        page = page ||1
        limit = limit||9
        let offset = page * limit - limit
        let devices;
        if(!brandId){
            devices = await Device.findAndCountAll(limit, offset)
        }
        if(brandId){
            devices = await Device.findAndCountAll({where:{brandId},limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res){
        
    }
}
module.exports = new DeviceController()