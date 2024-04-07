'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const About = () => {
    const route = useRouter()

    const items = [
        'shadcn',
        'darkmode',
        'lucide react',
        'react hook form',
        'zod',
        'tailwind',
        'next themes',
        'eslint',
        'prettier',
    ]

    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-6 p-24'>
            <Label>List of things included:</Label>
            <ul>
                {items.map((label, key) => (
                    <li key={key}>* {label}</li>
                ))}
            </ul>
            <Button onClick={() => route.push('/')}>Go back home</Button>
        </main>
    )
}

export default About
