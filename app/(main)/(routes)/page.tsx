import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'


const state = false

export default function Home() {
    return (
        <div>
            <UserButton 
                afterSignOutUrl='/'
            />
        </div>
    )
}
