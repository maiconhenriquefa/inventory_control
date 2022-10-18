import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import { useSideBarContext } from '../contexts/SideBarContext'
import SideBarNav from './SideBarNav'

const SideBar = () => {
  const {isOpen, onClose} = useSideBarContext()

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => onCLose()}>
        <DrawerOverlay>
          <DrawerContent p="2" onClick={() => onClose()}>
            <DrawerCloseButton/>
            <DrawerHeader/>

            <DrawerBody>
              <SideBarNav/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  } 
    return (
      <Box as="aside" w="64" mr="8">
        <SideBarNav/>
      </Box>
    )
  }

export default SideBar;