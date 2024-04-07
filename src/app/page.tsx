'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function Home() {
    const route = useRouter()

    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-6 p-24'>
            <Label>Hello world and welcome to Pouiiro&rsquo;s next 🍽️</Label>
            <Button onClick={() => route.push('about')}>
                What is included?
            </Button>
        </main>
    )
}
