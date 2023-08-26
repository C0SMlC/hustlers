const OpenAI = require('openai');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// for get and post
app.use(cors());

// for put and patch and delete
app.options('*', cors());

app.use(
  express.json({
    limit: '10kb',
  })
);

app.get('/generateQuestion', async (req, res) => {
  try {
    const { topic, numQuestion, maxMark } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Generate ${numQuestion}, ${maxMark} marks questions for me on ${topic}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    const responseData = chatCompletion.choices[0].message.content;

    const dataArray = responseData.split(/\d+\.\s+/);

    const cleanedArray = dataArray.filter((item) => item.trim() !== '');

    const finalArray = cleanedArray.map((item) => item.replace(/\n/g, ''));

    res.status(200).json({
      status: 'success',
      data: finalArray,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: 'Please Try Again!',
      error,
    });
  }
});
const main = async () => {};

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection : Shutting Down !!! ');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
