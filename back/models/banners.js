const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Banner extends Model {

        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        static associate(models) {
            this.personalId = this.belongsTo(models.Personals, {
                foreignKey: 'personalId',
            });
        }
    }

    Banner.init({
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            imageUrl: {
                type: DataTypes.STRING
            },
            alt: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: 'Banners',
            timestamps: false
        });
    return Banner;
};