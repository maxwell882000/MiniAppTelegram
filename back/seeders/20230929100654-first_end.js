'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Personals', [
            {
                id: 1,
                alt: "hair doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155837532458725487/madina2201_generate_picture_of_the_doctor_from_hospital_with_di_16c6c231-cfa0-423b-8cfe-407338ae968d.png",
                header: "Master of Glamorous Locks",
                body: "Meet our expert hair doctor who specializes in creating glamorous locks. With years of experience and a passion for beauty, our doctor can transform your hair into a stunning masterpiece. Whether you're looking for a new hairstyle, color, or hair care advice, our doctor has got you covered. Schedule an appointment today and let us make your hair dreams come true!"
            },
            {
                id: 2,
                alt: "history doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155839479446245496/madina2201_generate_1_picture_of_the_doctor_from_hospital_with__99c1eda6-6e44-4387-8860-81dfadf167d8.png",
                header: "Sage of Time and Knowledge",
                body: "Meet our esteemed history doctor who is a true sage when it comes to the annals of time and knowledge. With a deep passion for unraveling the past, our doctor can guide you through the rich tapestry of history. Whether you're curious about ancient civilizations, pivotal moments, or historical figures, our doctor is here to enlighten you. Explore the depths of history with us today!"
            },
            {
                id: 3,
                alt: "new doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155839490837991566/madina2201_generate_1_picture_of_the_doctor_from_hospital_with__ac1e991c-fd24-40de-b47d-8dce8f412e9e.png",
                header: "Innovator of Healing Arts",
                body: "Introducing our innovative new doctor who is at the forefront of healing arts. With a commitment to pushing the boundaries of medical science, our doctor is dedicated to finding groundbreaking solutions for your health. Whether it's the latest treatments, cutting-edge therapies, or personalized care plans, our doctor strives to provide the best in modern medicine. Join us on a journey to better health and wellness!"
            },
            {
                id: 4,
                alt: "old doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155839699613650954/madina2201_generate_1_picture_of_the_doctor_from_hospital_with__ffa25e1f-f26d-4a69-a24d-63f0043f5357.png",
                header: "Wisdom Keeper of Health",
                body: "Meet our venerable old doctor, the wisdom keeper of health. With a lifetime of experience and a wealth of knowledge, our doctor is a trusted guide on your journey to well-being. Whether you're seeking advice on maintaining a healthy lifestyle, managing chronic conditions, or understanding the intricacies of the human body, our doctor is here to impart their wisdom. Join us in honoring the legacy of health and wellness with our esteemed doctor."
            },
            {
                id: 5,
                alt: "smart doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155839709566746646/madina2201_generate_1_picture_of_the_doctor_from_hospital_with__95ad5122-f10f-4541-8726-7ac3c2bc62b6.png",
                header: "Genius of Medical Marvels",
                body: "Introducing our brilliant smart doctor, the genius behind medical marvels. With an extraordinary intellect and an insatiable curiosity, our doctor is constantly pushing the boundaries of medical knowledge. Whether it's pioneering treatments, cutting-edge research, or innovative healthcare solutions, our doctor is at the forefront of it all. Join us in experiencing the wonders of modern medicine with our exceptional smart doctor."
            },
            {
                id: 6,
                alt: "philosophy doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155839733478469763/madina2201_generate_1_picture_of_the_doctor_from_hospital_with__9caad7f5-ab30-4f0a-8266-af2e60745163.png",
                header: "Philosopher of Healing Wisdom",
                body: "Meet our profound philosophy doctor, the philosopher of healing wisdom. With a deep contemplative spirit and a holistic approach to wellness, our doctor views health as a profound journey. Whether you seek guidance on the mind-body connection, the ethics of healthcare, or the meaning of healing, our doctor offers profound insights. Join us in exploring the profound wisdom of healing with our philosophical doctor."
            },
            {
                id: 7,
                alt: "great doctor",
                imageUrl: "https://cdn.discordapp.com/attachments/1151418500137623617/1155839725245059174/madina2201_generate_1_picture_of_the_doctor_from_hospital_with__e5e796ca-85b9-4f08-8162-c208c38062c1.png",
                header: "Great Maestro of Medicine",
                body: "Introducing our esteemed great doctor, the maestro of medicine. With unparalleled expertise and a legacy of healing, our doctor is a true master in the world of healthcare. Whether you require complex medical procedures, compassionate care, or a guiding hand through your health journey, our doctor is here to lead the way. Join us in experiencing the greatness of medicine with our revered maestro."
            }
        ]);
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
