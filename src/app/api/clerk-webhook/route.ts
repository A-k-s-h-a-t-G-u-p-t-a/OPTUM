import  { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const body = await req.json();
        const{id,email_addrresses,first_name,image_url}= body?.data;
        const email = email_addrresses[0].email_address;
        console.log(body);
        await db.user.upsert({
            where:{clerkId : id},
            update:{email,
                name:first_name,
                profileImage: image_url
            },
            create:{
                clerkId: id,
                email,
                name: first_name || '',
                profileImage: image_url
                }
            });
            return new NextResponse('User updated in db successfully',{
                status:200,
            });
        } catch(e){
        console.error('Error updating db:',e);
        return new NextResponse('Error updating db',{
            status:500,
        });
    }
}