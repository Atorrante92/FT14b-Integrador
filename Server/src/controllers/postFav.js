const { Favorite } = require('../DB_connection');

const postFav = async(req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if(id && name && origin && status && image && species && gender) {
            const user = await Favorite.findOrCreate({
                where: { id, name, origin, status, image, species, gender }
            });
            const allFavorites = await Favorite.findAll();
            res.status(201).json(allFavorites);
        }
        res.status(401).json({ error: 'Faltan datos' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = postFav;
