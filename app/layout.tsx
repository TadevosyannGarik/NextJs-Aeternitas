import { ThemeProvider } from '@/components/providers/sheme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import './globals.css'
import { SocketProvider } from '@/components/providers/socket-provider'
import { QueryProvider } from '@/components/providers/query-provider'


const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Aeternitas',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem={false}
                        storageKey='aeternitas-theme'
                    >
                        <SocketProvider>
                            <ModalProvider />
                            <QueryProvider>
                                {children}
                            </QueryProvider>
                        </SocketProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
