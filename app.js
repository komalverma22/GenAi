import "dotenv/config"
import openAi from "openai"

const client=new openAi({
    apikey:process.env.GROQ_API_KEY,
    baseurl:""
})

async function main(){
    const response=await client.chat.completions.create({
       model:"",
       temperature: 0.8,
       top_p: 0.2 ,
       max_completion_tokens: 100,
  frequency_penalty: 1,
presence_penalty: 1,
       messages:[{
        role:"user",
        content:""
       }]        
    })
    console.log(response.choices[0].message.content);
    
}

main();