const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Personal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.comments = this.hasMany(models.Comments, {as: "comments"});
            this.banners = this.hasMany(models.Banners, {as: "banners"});
        }
    }

    Personal.init({
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            imageUrl: {
                type: DataTypes.STRING
            },
            header: {
                type: DataTypes.STRING
            },
            body: {
                type: DataTypes.TEXT
            }
        },
        {
            sequelize,
            modelName: 'Personals',
            timestamps: false
        });
    return Personal;
};