const express = require('express');
const router = express.Router();

const { getUser,addUser,updateUser,deleteUser,getById } = require('./../controller/controller');

router.get('/', getUser);

router.get('/:id', getById);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;