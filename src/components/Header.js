import { Avatar, Flex, HStack, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react"
import { useSideBarContext } from "../contexts/SideBarContext";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  const {onOpen} = useSideBarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1400}
      h="20"
      mx="auto"
      px="4"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    > {
      isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )
    }
      <Text>LOGO</Text>
      <Flex ml="auto">
        <HStack spacing={4}>
          <Text>Maicon Henrique</Text>
          <Avatar size="md" name="Maicon Henrique" bg="gray.500" color="white"/>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Header;