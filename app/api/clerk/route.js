import { Webhook } from "svix";
import connectDB from "@/config/db";
import User from "@/models/User";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(required) {
    const wh = new Webhook(process.env.SIGNING_SECRET)
    const headerPayload = await headers()
    const svixHeaders ={
        "svix-id": headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature"),
    };

    //GET THE PAYLOAD AND VERIFY IT
    const payload = await required.json();
    const body = JSON.stringify(payload);
    const {data,type} = wh.verify(body, svixHeaders)

    //PREPARE THE USER DATA TO BE SAVED IN THE DATABASE

    const userData ={
        _id: data.id,
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
    };

    await connectDB();

    switch (type) {
        case 'user.created':
            await User.create(userData)
            break;

        case 'user.updated':
            await User.findByIdAndUpdate(data.id,userData)
            break;

        case 'user.deleted':
            await User.findByIdAndDelete(data.id,userData)
            break;
    
        default:
            break;
    }

    return NextRequest.json({message: "Event Received"})
}