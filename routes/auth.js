const {Router} = require('express');
const router = Router();

const {crearUsuario, loginUsuario, getUsers, deleteUser, getUser, updateUser, registerPsy} = require('../controllers/auth');

router.post('/register', crearUsuario);

//router.post('/', loginUsuario);

router.get('/users', getUsers);

router.delete('/user/:id', deleteUser);

router.get('/user/:id', getUser);

router.put('/userUpdate/:id', updateUser);

router.post('/registerPsy', registerPsy);

router.post('/autenticate', loginUsuario);
module.exports = router;