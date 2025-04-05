import React from 'react'
import Workflow from './workflow'

type Props = {}

export default function Workflows({}: Props) {
  return (
    <div className='relative flex flex-col gap-4'>
        <section className='flex flex-col p-6'>
            <Workflow description='alknflkadnf' id = "24143513513" name='"Automation workflow' publish = {false}></Workflow>
        </section>
    </div>
  )
}
