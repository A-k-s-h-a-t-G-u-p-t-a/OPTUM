import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <SignIn></SignIn>
    </div>
  )
}
export default page;