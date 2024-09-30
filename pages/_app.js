import Layout from "@/components/Layout/layout";
import { SessionProvider } from "next-auth/react";
import { NotificationContextProvider } from '@/store/notification-context';





export default function App({ Component, pageProps }) {
  return (
    
    <NotificationContextProvider>
    <SessionProvider session={pageProps.session}>
    
        <Layout><Component {...pageProps} /></Layout>
        
      
    </SessionProvider>
    </NotificationContextProvider>
    
  )
  
}
