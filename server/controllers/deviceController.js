class DeviceController{
    async create (req, res){

    }

    async getAll (req, res){
        
    }

    async getOne(req, res){
        const {id} = req.query
        res.json(id)
    }
}
module.exports = new DeviceController()