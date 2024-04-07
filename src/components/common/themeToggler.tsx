'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

export const ThemeToggler = () => {
    const { systemTheme, theme, setTheme } = useTheme()

    const currentTheme = useMemo(
        () => (theme === 'system' ? systemTheme : theme),
        [theme, systemTheme]
    )

    return (
        <button
            className={`w-fit absolute right-5 top-2 p-2 hover:scale-110 active:scale-100 duration-200`}
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
            {currentTheme === 'light' ? (
                <Moon className='duration-0' />
            ) : (
                <Sun className='duration-0' />
            )}
        </button>
    )
}
