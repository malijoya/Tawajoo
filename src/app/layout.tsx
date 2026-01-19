import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
    title: 'Tawajoo - Mobile Advertising That Moves Your Brand',
    description: 'Transform city rikshaws into powerful advertising platforms. Our SMD displays take your brand message across the entire city, reaching thousands of potential customers every day.',
    keywords: ['mobile advertising', 'rikshaw advertising', 'SMD display', 'outdoor advertising', 'Pakistan', 'brand marketing'],
    authors: [{ name: 'Tawajoo' }],
    openGraph: {
        title: 'Tawajoo - Mobile Advertising That Moves Your Brand',
        description: 'Transform city rikshaws into powerful advertising platforms with cutting-edge SMD technology.',
        type: 'website',
        locale: 'en_US',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
