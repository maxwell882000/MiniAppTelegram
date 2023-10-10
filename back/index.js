const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '6301830744:AAHfTtbRO6EYZ5_dHEOuGGUpMkS6ds4yCCs';
const webAppUrl = 'https://main--guileless-parfait-5c5fd4.netlify.app';

// sequelize.sync({force: true});
const bot = new TelegramBot(token, {polling: true});
const app = express();

const models = require('./models');
app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
            reply_markup: {
                keyboard: [
                    [{text: 'Заполнить форму', web_app: {url: webAppUrl + '/form'}}]
                ]
            }
        })

        await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data)
            console.log(data)
            await bot.sendMessage(chatId, 'Спасибо за обратную связь!')
            await bot.sendMessage(chatId, 'Ваша страна: ' + data?.country);
            await bot.sendMessage(chatId, 'Ваша улица: ' + data?.street);

            setTimeout(async () => {
                await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
            }, 3000)
        } catch (e) {
            console.log(e);
        }
    }
});


app.get('/people/:userId', async (req, res) => {
    return res.status(200).json(await models.Personals.findOne({
        where: {id: req.params.userId},
        include: [
            {
                model: models.Comments,
                as: "comments"
            },
            {
                model: models.Banners,
                as: "banners"
            }
        ]
    }));
});


app.get('/people', async (req, res) => {
    return res.status(200).json(await models.Personals.findAll());
});

app.post("/add_comment", async (req, res) => {
    return res.status(200).json(await models.Comments.create(req.body));
});

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT))
