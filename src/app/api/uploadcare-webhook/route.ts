import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try{
        const body = await req.json();
        console.log('✅',body);
        const {event ,data} = body;
        const fileUrl = data.cdn_url;
        const fileId  = data.uuid;
        if(event!=="file.uploaded"){
            return new Response('Not a file uploaded event',{
                status:200,
            });
        }
        const userId = data.metadata?.userId; // Ensure Uploadcare sends userId in metadata

        if (!userId) {
            return new NextResponse("Missing userId", { status: 400 });
        }
        await db.user.update({
            where:{
                clerkId: userId
            },
            data:{
                profileImage: fileUrl
            }
        })
        console.log(`✅ Profile image updated for user ${userId}: ${fileUrl}`);
        return new NextResponse("Profile image updated", { status: 200 });
    }catch(e){
        console.error('Error updating db:',e);
        return new NextResponse('Error updating db',{
            status:500,});
    }

}