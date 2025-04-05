import { ConnectionProviderProps } from '@/providers/connections-provider';
import {z} from 'zod';
export const formSchema = z.object({
    email : z.string().email('Required'),
    name: z.string().min(1, 'Required'),
})
export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connection = {
  title: ConnectionTypes
  description: string
  image: string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}
// interface Connection {
//     title: string;
//     description: string;
//     image: string;
//     connectionKey: string;
//     alwaysTrue?: boolean;
//     accessTokenKey?: string;
//     slackSpecial?: boolean;
//   }