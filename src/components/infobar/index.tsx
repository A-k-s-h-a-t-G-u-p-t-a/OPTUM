import { Book, Headphones, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { UserButton } from "@clerk/nextjs";



export default function InfoBar(){
    return(
        <div className="flex flex-row justify-end gap-6 px-4 py-4 w-full">
            <span className="flex items-center rounded-full bg-muted px-4">
                <Search/>
                <Input placeholder="Search" className="border-none bg-transparent"/>
            </span>
            
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Headphones/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Contact Support</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
                
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Book/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Guide</p>
                    </TooltipContent>
                </Tooltip>

            </TooltipProvider>
            <UserButton></UserButton>
        </div>
    )
}