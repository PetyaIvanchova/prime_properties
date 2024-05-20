import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Prime_Properties',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, dind properties'
}

const MainLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default MainLayout;
