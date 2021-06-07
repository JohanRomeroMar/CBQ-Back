const {Router} = require('express');
const router = Router();

const {crearUsuario, loginUsuario, getUsers} = require('../controllers/auth');

router.post('/register', crearUsuario);

router.post('/', loginUsuario);

router.get('/users', getUsers);
module.exports = router;