"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/lib/types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

type Props = {}

const ProfileForm = (props: Props) => {
    const[isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onChange",
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email:"",
        },
      })
  return (
    <Form {...form}>
        <form className='flex flex-col gap-6 ml-5'
        onSubmit={()=>{}}>
            <FormField
            disabled = {true}
            control={form.control}
            name="name"
            render = {({field})=>(
                <FormItem>
                    <FormLabel className='text-lg'>User full name</FormLabel>
                    <FormControl>
                        <input 
                        placeholder='Name'
                        {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            disabled = {isLoading}
            control={form.control}
            name="email"
            render = {({field})=>(
                <FormItem>
                    <FormLabel className='text-lg'>User Email</FormLabel>
                    <FormControl>
                        <input 
                        placeholder='Email'
                        {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <Button
            type='submit'
            className="self-start hover:bg-white/50">
                {isLoading ? <><Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2> 
                Saving</>:('Save User Settings')}
            </Button>
        </form>
    </Form>
  )
}
export default ProfileForm;