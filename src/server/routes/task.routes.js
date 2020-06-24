const express = require('express')
const router = express.Router()

const taskCtrl = require('../controllers/task.controller') // Using the controller for resolving the requests

router.get('/', taskCtrl.getTasks)

router.get('/:id', taskCtrl.getTaskById)

router.post('/', taskCtrl.createTask)

router.put('/:id', taskCtrl.updateTask)

router.delete('/:id', taskCtrl.deleteTask)

module.exports = router