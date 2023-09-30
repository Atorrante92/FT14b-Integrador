const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         //allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false }); // Para que NO me aparezcan los datos de cuando fué creado
};
