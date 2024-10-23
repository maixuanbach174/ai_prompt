import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { ReactNode } from 'react';

export const metadata = {
    title: "Chatopia",
    description: "Chatopia is a chat application that allows users to chat with each other in real-time.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}