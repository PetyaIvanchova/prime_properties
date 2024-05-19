import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Prime_Properties',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, dind properties'
}

const MainLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}

export default MainLayout;
