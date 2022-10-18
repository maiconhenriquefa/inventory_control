import { Box, Button, Flex, Input, SimpleGrid, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Products () {
  const [name, setName] = useState("");
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const STORAGE_PRODUCTS = localStorage.getItem("@STORAGE_PRODUCTS")
     ? JSON.parse(localStorage.getItem("@STORAGE_PRODUCTS"))
     : [];

     setListProducts(STORAGE_PRODUCTS)
  }, [])

  const handleNewProduct = () => {
    if (!name) return;
    if (verifyProductName()) {
      alert("Produto já cadastrado!");
      return;
    }

    const id = Math.random().toString(36).substring(2);

    if (listProducts && listProducts.length) {
      localStorage.setItem("@STORAGE_PRODUCTS",
      JSON.stringify([...listProducts, {id, name}]))

      setListProducts([...listProducts, {id, name}])
    } else {
      localStorage.setItem("@STORAGE_PRODUCTS",JSON.stringify([{id, name}]));

      setListProducts([{id, name}]);
    }

    setName("")
  };

  const verifyProductName= () => {
    return !!listProducts.find(prod => prod.name === name)
  }

  const removeProduct = (id) => {
    const STORAGE_STOCK_OUTPUTS = localStorage.getItem("@STORAGE_STOCK_OUTPUTS")
     ? JSON.parse(localStorage.getItem("@STORAGE_STOCK_OUTPUTS"))
     : [];

     const STORAGE_STOCK_ENTRIES = localStorage.getItem("@STORAGE_STOCK_ENTRIES")
     ? JSON.parse(localStorage.getItem("@STORAGE_STOCK_ENTRIES"))
     : [];

     const hasOutputs = STORAGE_STOCK_OUTPUTS.filter(item => item.product_id === id).length;
     const hasEntries = STORAGE_STOCK_ENTRIES.filter(item => item.product_id === id).length;
     if (hasOutputs || hasEntries) {
      alert("Esse produto está em movimentações!")
      return;
     }

     const newArray= listProducts.filter(item => item.id !== id);
     localStorage.setItem("@STORAGE_PRODUCTS",JSON.stringify(newArray));

     setListProducts(newArray);
  }

  return (
    <Flex flexDirection="column" h="100vh">
      <Header/>

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <SideBar/>

        <Box w="100%">
          <SimpleGrid minChildWidth={240} h="fit-content" spacing={"6"}>
            <Input
              value={name}
              onChange={event => setName(event.target.value)}
              placeHolder={"Nome do produto"}
              onKeyDown={event => event.key === "Enter" && handleNewProduct()}
            />
            <Button w="40" onClick={handleNewProduct}>
              CADASTRAR
            </Button>
          </SimpleGrid>
          <Box overflowY={"auto"} height="80vh">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th fontWeight="bold" fontSize="14px">
                  Nome
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {listProducts.map((product,id) => (
                <Tr key={id}>
                  <Td color="gray.500">{product.name}</Td>
                  <Td textAlign="end">
                    <Button
                      p="2"
                      h="auto"
                      fontSize={11}
                      color="red.500"
                      fontWeight="bold"
                      onClick={() => removeProduct(product.id)}
                    >
                      DELETAR
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        </Box>
        
      </Flex>
    </Flex>
  )
}
