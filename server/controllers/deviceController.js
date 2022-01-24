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
        
        const {brandId} = req.query
        let devices;
        if(!brandId){
            devices = await Device.findAll()
        }
        if(brandId){
            devices = await Device.findAll({where:{brandId}})
        }
        return res.json(devices)
    }

    async getOne(req, res){
        const {id} = req.query
        res.json(id)
    }
}
module.exports = new DeviceController()