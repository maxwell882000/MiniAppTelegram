'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert("Banners", [
                {
                    id: 1,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155844006228537466/madina2201_give_several_different_backgrounds_for_hospital_5d04f783-60a7-4e64-8fe4-cd68b2d6c25f.png",
                    alt: "banner",
                    personalId: 1
                },
                {
                    id: 2,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155844015829287074/madina2201_give_several_different_backgrounds_for_hospital_507cf482-f18d-427c-8ee2-0abf4af84412.png",
                    alt: "banner cool",
                    personalId: 2
                },
                {
                    id: 3,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155844031666987069/madina2201_give_several_different_backgrounds_for_hospital_6231d12e-40f5-4113-9c58-ebac0e443fe6.png",
                    alt: "two beds",
                    personalId: 3
                },
                {
                    id: 4,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155844038210113626/madina2201_give_several_different_backgrounds_for_hospital_4fccd632-cff6-4068-8556-ccdefba53f0a.png",
                    alt: "big building",
                    personalId: 4
                },
                {
                    id: 5,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1157259692704276570/madina2201_give_several_different_backgrounds_for_hospital_1a4b3d31-1714-4ce9-940b-5d2bb88601fa.png?ex=6517f593&is=6516a413&hm=8e80a7c914888b97ed9b920706c42164f64f26d45765d0c4c775576c1562eba2&",
                    alt: "big building",
                    personalId: 5
                },
                {
                    id: 6,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1157259702904827914/madina2201_give_several_different_backgrounds_for_hospital_ed93985d-db48-45b4-9c22-bbf7cc4fc139.png?ex=6517f596&is=6516a416&hm=41b1be3fe3248ea9f56263717beb61dcf3a8ca57e68cd486b2bea4a9e2affb11&",
                    alt: "big building",
                    personalId: 6
                },
                {
                    id: 7,
                    imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1157259713046659093/madina2201_give_several_different_backgrounds_for_hospital_b3dfa51d-810f-45af-9cd6-f65dc8d3c924.png?ex=6517f598&is=6516a418&hm=a489c4f11ac178b9a3ac7ee293f469e23e2c8347612c5bbc7d4e821aa7d5f9aa&",
                    alt: "big building",
                    personalId: 7
                },
            ]
        )
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
