import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

const SideBarContext  = createContext()

export const SideBarProvider = ({children}) => {
  const disclosure = useDisclosure();

  return (
    <SideBarContext.Provider value={disclosure}>
      {children}
    </SideBarContext.Provider>
  )
}

export const useSideBarContext = () => useContext(SideBarContext);