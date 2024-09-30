import {React ,useContext} from 'react'
import Header from './header'
import Footer from './footer'
import PreLoder from './preloader'
import Notification from '../ui/notification';
import NotificationContext from '@/store/notification-context';
import GlobalProvider from "@/GlobalProvider";
import { extendTheme,ChakraProvider, background } from '@chakra-ui/react'
import { color } from 'framer-motion';



export default function Layout({children}) {

  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          background: "",
          color:"",
        },
      }),
    },
  });
  //const theme = extendTheme({ config })
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <>
     
     <div className="wrapper">
     {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Header />
      {children}
      <Footer />
      </GlobalProvider>
      </ChakraProvider>
      </div>
    </>
  )
}
