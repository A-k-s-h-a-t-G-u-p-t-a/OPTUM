"use client"
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  // userImage: string |null
  // onDelete? : any
  // onUpload? : any
}

const ProfilePicture = ({}: Props) => {
  // const router  = useRouter()
  // const onRemoveProfileImage  = async ()=>{
  //   const response = await onDelete()
  //   if(response){
  //     router.reload()
  //   }
  // }
  return (
    <div className='flex flex-col'>
        <p className='text-lg text-white ml-6'>Profile Picture</p>
            <div className='flex h-[30vh] flex-col items-center justify-center'>
                {/* <>
                <div className='relative h-full w-2/12'>
                  <Button
                  className='bg-transparent text-grey hover:bg-transparent text-white'
                  >
                  <X/> Remove Logo
                  </Button>
                  </div>
                </>   */}
                  <UploadCareButton/>
            </div>
    </div>
  )
}
export default ProfilePicture