
import { Inter } from 'next/font/google'
import './globals.css'
import TopHeader from '../components/Header-Footer/Top-Header/TopHeader'
import SearchHeader from '../components/Header-Footer/Search-Header/SearchHeader'
import ClientProviderTheme from "./ClientProviderTheme";
import Footer from '../components/Header-Footer/Footer/Footer';
import Stickybar from '../components/Home-Page/Stickybar/Stickybar';
import ClientProviderRedux from './ClientProviderRedux';
import { StyledEngineProvider } from '@mui/material';
import { getLocalData } from '../../json/lib/localdata';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bonik Ecommerce',
  description: 'Get Your Favorite Clothes With Lowest Price And High Quality',
}

export default async function RootLayout({ children }) {
  const data = await getLocalData();

  return (
    <html lang="en">
      
        <body className={inter.className}>
          <ClientProviderRedux>
            <StyledEngineProvider injectFirst>
              <ClientProviderTheme>
                <TopHeader/>
                <SearchHeader data={data}/>
                  {children}
                <Footer/>
                <Stickybar/>
              </ClientProviderTheme>
            </StyledEngineProvider>
          </ClientProviderRedux>
        </body>
      
    </html>
  )
}

