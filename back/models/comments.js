
const {
    Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {

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

    Comment.init({
        userId: {
            type: DataTypes.BIGINT,
        },
        commentId: {
            type: DataTypes.BIGINT,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        },
        parentId: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Comments',
        timestamps: false
    });
    return Comment;
};