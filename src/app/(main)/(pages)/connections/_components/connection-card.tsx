import { ConnectionTypes } from '@/lib/types'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: {} & any
}

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  return (
    <Card className="flex w-full items-center justify-start p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 w-full">
        <Image
          src={icon}
          alt={title}
          height={40}
          width={40}
          className="object-contain rounded-md bg-muted p-1"
        />
        <div className="flex flex-col justify-center">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </div>
        <div className="ml-auto">
          {connected[type] ? (
            <div className="rounded-lg bg-green-500 px-4 py-2 text-sm font-bold text-white">
              Connected
            </div>
          ) : (
            <Link
              href={
                title === 'Discord'
                  ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                  : title === 'Notion'
                  ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                  : title === 'Slack'
                  ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                  : '#'
              }
              className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition"
            >
              Connect
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ConnectionCard
