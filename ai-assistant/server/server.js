   // server.js
   const express = require('express');
   const bodyParser = require('body-parser');
   const cors = require('cors');
   const OpenAI = require('openai');
   require('dotenv').config();

   const app = express();
   const port = 5000;

   app.use(cors());
   app.use(bodyParser.json());

   
   const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

   app.post('/api/chat', async (req, res) => {
       const userMessage = req.body.message;
       try {
           const response = await openai.chat.completions.create({
               model: "gpt-3.5-turbo",
               messages: [{ role: "user", content: userMessage }],
           });
           res.json({ reply: response.choices[0].message.content });
       } catch (error) {
           console.error('Error communicating with OpenAI API:', error);
           res.status(500).send('Error communicating with OpenAI API');
       }
   });

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });