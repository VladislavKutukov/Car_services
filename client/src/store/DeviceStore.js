import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._brands=[]
        this._devices=[]
        this.selecterdBrand= {}
        makeAutoObservable(this)
    }

    setBrands(brands){
        this._brands=brands
    }

    setDevices(devices){
        this._devices=devices
    }
    setSelectedBrand(brand){
        this.selecterdBrand =brand
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }
    get selectedBrand (){
        return this.selecterdBrand
    }
}