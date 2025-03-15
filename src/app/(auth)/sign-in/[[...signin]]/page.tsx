import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <SignIn></SignIn>
    </div>
  )
}
export default page;