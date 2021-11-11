import { Box,Center,HStack,Text,VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    
  } from "@chakra-ui/react"
  import { IconButton } from "@chakra-ui/button";
  import { useState,useRef } from "react";
import AddNewCousrse from "./AddNewCourse";
import AddNewEvent from "./AddNewEvent";
const Welcome_admin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState("inside")
    const btnRef = useRef()
    
    return ( 
    <Box bg="#0063B1" >
          
          <Center py={["50%","25%","25%","25%"]}  alignSelf="center"  >
            <VStack spacing={6}>
            <Text   fontSize={["xl","xl","4xl","4xl"]} color="black">Welcome Admin</Text> 
            <HStack spacing={4}>
            <AddNewCousrse/>
            <AddNewEvent/>
            
            </HStack>
            </VStack>
          </Center>
    </Box>
  

     );
}
 
export default Welcome_admin;