const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser); // Rota para atualizar usuário
router.delete('/:id', userController.deleteUser); // Rota para excluir usuário

module.exports = router;


 


 

 