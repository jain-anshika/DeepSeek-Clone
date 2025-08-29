export const maxDuration = 60;
import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";


//initialize OpenAI client with OpenRouter DeepSeek API key and base URL
const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.DEEPSEEK_API_KEY
});

export async function POST(req) {
    try {
        const { userId } = getAuth(req);

        //extract chat id and prompt from the request body
        const { chatId, prompt } = await req.json();

        if(!userId){
            return NextResponse.json({
                success: false, 
                message:"User not authenticated"
            });
        }

        //find the chat document in the database based on userId and chatId
        await connectDB();
        const data = await Chat.findOne({userId, _id: chatId})

        //create a user message object
        const userPrompt = {
            role: "user",
            content: prompt,
            timestamp: Date.now()
        };

        data.messages.push(userPrompt);

        //call the deepseek api to get the chat completion

        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "deepseek/deepseek-chat-v3.1:free",
            store: true,
        });

        const message = completion.choices[0].message;
        message.timestamp = Date.now()
        data.messages.push(message);
        data.save();

        return NextResponse.json({success: true, data: message})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message}); 
    }
}