let animalsData = [
    {
    id: 1,
    nombre: "León"
    },
    {id: 2,
    nombre: "Bufalo"
    },
    {
    id: 3,
    nombre: "Elefante"
    }
]

const getAnimals = (req, res) => {

    res.status(200).json(animalsData)
}

const getAnimalById = (req, res) => {
    res.status(200).send('funcionando 45')
}

const postAnimal = (req, res) => {
    const {id,nombre} = req.body
    animalsData.push({id,nombre})
    res.send('Animal añadido correctamente')
}

const deleteAnimal = (req, res) => {
    const idAnimal = parseInt.filter(animal => animal.id !== idAnimal)
    res.send("Animal eliminado")
}


module.exports ={
    getAnimals,
    getAnimalById,
    postAnimal,
    deleteAnimal
}