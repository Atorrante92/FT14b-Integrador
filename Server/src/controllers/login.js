const { User } = require('../DB_connection');

const login = async(req, res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password) {
            res.status(400).json({ error: 'Faltan datos' });
        }
        if(email && password) {
            const loggedUser = await User.findOne({
                where: { email },
            });
            if(!loggedUser) {
                res.status(404).json({ error: 'Usuario no encontrado' });
            } else {
                return loggedUser.password === password ? res.status(200).json({ access: true }) : res.status(401).json({ error: 'Contraseña incorrecta' });
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }    
};

module.exports = login;