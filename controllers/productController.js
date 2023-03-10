const db = require('../models')

const Bus = db.busses


//main work

//1. create product



const addBus = async ( req , res ) => {
console.log(req.body)
    let info = {
        marca: req.body.marca,
        chassi: req.body.chassi,
        carroceria: req.body.carroceira,
        anoMod: req.body.anoMod,
        anoFab: req.body.anoFab,
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
res.status(200).send(busses)
}


const getOneBus = async (req, res) =>{

    let id = req.params.id
    let bus = await Bus.findOne({where : { id: id}})
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




module.exports = {
    addBus,
    getAllBusses,
    getOneBus,
    updateBus,
    deleteBus

}