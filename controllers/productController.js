const db = require('../models')

const Bus = db.busses


//main work

//1. create product

const addBus = async ( req , res ) => {

    let info = {
        marca: req.body.marca,
        chassi: req.body.chassi,
        carroceria: req.body.carroceira,
        anoMod: req.body.anodFab,
        anodFab: req.body.anodFab,
        cor: req.body.cor,
        quantidadeLugares: req.body.quantidadeLugares,
        fotos: req.body.fotos
    }
    
    


const bus = await Bus.create(info)
res.status(200).send(bus)
console.log(bus)

}
//get all productd
const getAllBusses = async (req, res) =>{

let busses = await Bus.findAll({})
res.status(200).send(bus)
}


const getOneBus = async (req, res) =>{

    let id = req.params.id
    let busses = await Bus.findOne({where : { id: id}})
    res.status(200).send(bus)
}


const updateBus = async (req, res) =>{

    let id = req.params.id
    
    const bus = await Bus.update(req.body, { where: {id : id}})

    res.status(200).send(bus)
}


const deleteBus= async (req, res) =>{

    let id = req.params.id
    await Bus.destroy({where : { id: id}})
    res.status(200).send('deleted')
}

console.log()


module.exports = {
    addBus,
    getAllBusses,
    getOneBus,
    updateBus,
    deleteBus


}