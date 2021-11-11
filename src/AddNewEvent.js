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
  import { useState,useRef } from "react";
import FormNewEvent from "./FormNewEvent";
 

const AddNewEvent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState("inside")
    const btnRef = useRef()
    return ( 
        <Box>
        <Button bg="blue" color="white"ref={btnRef} onClick={onOpen}>
                Add New Event
            </Button>
            <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <FormNewEvent/>
          </ModalBody>

         
        </ModalContent>
      </Modal>
      </Box>


     );
}
 
export default AddNewEvent;