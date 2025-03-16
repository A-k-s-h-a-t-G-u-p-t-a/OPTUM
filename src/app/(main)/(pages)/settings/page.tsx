import ProfileForm from '@/components/forms/profileform'
import React from 'react'
import ProfilePicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

type Props = {}

const Setting = async (props: Props) => {
    // const authUser = await currentUser();
    // console.log(authUser);
    // if(!authUser){
    //     return null;
    // }
    // const user = await db.user.findUnique({
    //     where:{
    //         clerkId: authUser.id
    //     }
    // })
    // console.log(user);
    // const removeProfileImage= async ()=>{
    //     'use server'
    //     const response = await db.user.update({
    //         where:{
    //             clerkId: authUser?.id,
    //         },
    //         data:{
    //             profileImage:''
    //         }
    //     })
    //     return response;
    // }
    // const uploadProfileImage = async (image:string)=>{
    //     'use server'
    //     const response = await db.user.update({
    //         where:{
    //             clerkId: authUser?.id,
    //         },
    //         data:{
    //             profileImage:image
    //         }
    //     })
    //     return response;
    // }
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='sticky top-0 z-[10] flex items-center justify-between border-b text-4xl bg-background/50 p-6 backdrop-blur-lg'>
            <span>Settings</span>
        </h1>
        <div className='flex flex-col gap-10 p-6'>
            <h2 className='text-2xl font-bold'> 
                User Profile
            </h2>
            <p className='text-base text-white/50'>
                Add or update your information
            </p>
        </div>
        <ProfilePicture/>
        <ProfileForm></ProfileForm>
    </div>
  )
}

export default Setting