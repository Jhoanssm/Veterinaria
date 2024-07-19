const express = require('express')
const animalsControllers = require('../controllers/animalsControllers')

const router = express.Router()


router.get('/', animalsControllers.getAnimals)

router.post('/animal', animalsControllers.postAnimal)

router.get('/:id', animalsControllers.getAnimalById)

router.delete('/animal/:id', animalsControllers.deleteAnimal)

module.exports = router