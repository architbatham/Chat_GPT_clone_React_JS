const {Configuration,OpenAIApi} = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-uldW9KnpnUExjJ9ShuMLATs2",
    apiKey:
    "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",
});
const openai = new OpenAIApi(configuration);



const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 3000

app.post('/',async(req,res)=>{
  const{message}=req.body;
  
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });

      
      res.json({
       message: response.data.choices[0].text,
      })
});

app.listen(port,()=>{
  console.log('Example app listening at http://localhost:${3000}')
});



