import Cake from "../models/cake.model.js"

const CakeController = {
    create: async (req, res) => {
        try {
            const newCake = await Cake.create(req.body)
            res.json(newCake)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadAll: async (req, res) => {
        try {
            const AllCakes = await Cake.find()
            res.json(AllCakes)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadOne: async (req, res) => {
        try {
            const OneCake = await Cake.findById(req.params.id)
            res.json(OneCake)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updateCake = await Cake.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updateCake)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const OneCake = await Cake.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },

}

export default CakeController