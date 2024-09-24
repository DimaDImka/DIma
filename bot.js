const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');



const bot = new Telegraf('7521210352:AAH8PbkHdwMSuUf4iV48IWH75jdtmGbMSto'); // Укажи токен твоего бота
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Маршрут для веб-приложения
app.get('/', (req, res) => {
  res.send('<h1>Добро пожаловать в мини-приложение Telegram!</h1>');
});

// Маршрут для запуска мини-приложения через бота
bot.command('start', (ctx) => {
  ctx.reply('Нажми на кнопку, чтобы открыть мини-приложение!', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть приложение',
            web_app: { url: 'https://ТВОЙ_ДОМЕН/' }, // Укажи ссылку на своё веб-приложение
          },
        ],
      ],
    },
  });
});

// Запускаем бота
bot.launch();

// Запускаем сервер
app.listen(3000, () => {
  console.log('Веб-приложение запущено на http://localhost:3000');
});