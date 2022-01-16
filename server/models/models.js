const sequelize = require ('../db')
const {DataTypes} = require ('sequelize')

const User = sequelize.define ('user',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
    email:{type: DataTypes.STRING,unique:true,},
    password:{type: DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"},
})

const Basket = sequelize.define ('basket',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
})

const BasketDevice = sequelize.define ('basket_device',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
})

const Device = sequelize.define ('device',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false},
})

const Brand = sequelize.define ('brand',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Brand
}