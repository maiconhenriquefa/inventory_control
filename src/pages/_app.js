import { ChakraProvider } from "@chakra-ui/react"
import { SideBarProvider } from "../contexts/SideBarContext"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SideBarProvider>
        <Component {...pageProps} />
      </SideBarProvider>
    </ChakraProvider>
  ) 
}

export default MyApp;
