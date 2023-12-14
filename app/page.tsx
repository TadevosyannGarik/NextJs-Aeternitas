import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


const state = false

export default function Home() {
    return (
        <div>
            <p className='text-3xl font-bold text-purple-600'>
                Hello From Aeternitas
            </p>
            <Button>
                Click Me
            </Button>
        </div>
    )
}
