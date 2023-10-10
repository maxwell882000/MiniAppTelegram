const Sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('Banners', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            imageUrl: {
                type: Sequelize.STRING
            },
            alt: {
                type: Sequelize.STRING
            },
            personalId : {
                type: Sequelize.BIGINT
            }
        });

        await queryInterface.createTable('Comments', {
            userId: {
                type: Sequelize.BIGINT,
            },
            commentId: {
                type: Sequelize.BIGINT,
                unique: true,
                autoIncrement: true,
                primaryKey: true
            },
            fullName: {
                type: Sequelize.STRING
            },
            text: {
                type: Sequelize.STRING
            },
            parentId: {
                type: Sequelize.BIGINT,
                allowNull: true
            },
            personalId : {
                type: Sequelize.BIGINT
            }
        });

        await queryInterface.createTable('Personals', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            imageUrl: {
                type: Sequelize.STRING
            },
            alt: {
                type: Sequelize.STRING
            },
            header: {
                type: Sequelize.STRING
            },
            body: {
                type: Sequelize.TEXT
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};