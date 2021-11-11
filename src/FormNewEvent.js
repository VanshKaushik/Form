import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Box,
    InputGroup,
    Button,
    InputRightElement,
    Stack,
    Radio,
    RadioGroup,
    Select,
    VStack,
    HStack,
    Flex,
   
  } from "@chakra-ui/react";
  import Axios from 'axios';
  import { IconButton } from "@chakra-ui/button";
  import { useState } from "react";
  import {Input} from "@chakra-ui/input";
  import { BsUpload } from "react-icons/bs";
  import {DeleteIcon} from '@chakra-ui/icons';
  import { useForm } from "react-hook-form";

const FormNewEvent = () => {
  const [fields, setFields] = useState([{ fn:"",ln:"" }]);
 
    const [data,setData] = useState({
      title:"",
      desc:"",
      cat:"",
      dom:"",
      plat:"",
      link:"",
      rule:"",
      inst:"",
      det:"",
      diff:"",
      price:"",
      start:"",
      end:""
    })
    function handleChangef(i, event) {
      const values = [...fields];
      values[i].fn = event.target.value;
      setFields(values);
    }
    function handleChangel(i, event) {
      const values = [...fields];
      values[i].ln = event.target.value;
      setFields(values);
    }
  
    function handleAdd() {
      const values = [...fields];
      values.push({ fn:"",ln:"" });
      setFields(values);
    }
  
    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    };

    const url="";
  
 
    function handle(e){
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      


    }
    function submit(e) {
      
      e.preventDefault();
      
      console.log(data.title+"\n"+data.desc+"\n"+data.cat + "\n"+ data.dom + "\n"+ data.plat +"\n"+data.link+"\n"+data.rule+"\n"+data.inst+"\n"+data.det + "\n"+ data.diff + "\n"+data.price+ "\n"+data.start+ "\n"+data.end);
      
      
    }

   
   
    return ( 
           <form onSubmit={(e) => submit(e)}>
            <FormControl  spacing={6} >
            
            <FormLabel>Event Title</FormLabel>
            <Input placeholder="Enter the title of the Event" id="title" onChange={(e) => handle(e)} value={data.title} name="title" /><br/><br/>
            <FormLabel>Event Description</FormLabel>
            <Textarea placeholder="Event Description" id="desc" name="desc" onChange={(e) => handle(e)} value={data.desc} />
            <br/><br/>
            
            <FormLabel>Event Category</FormLabel>
            <Select placeholder="Category" id="cat" name="cat" onChange={(e) => handle(e)} value={data.cat}  >
	          <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        
            </Select>
            <br/>
            <FormLabel>Event Domain</FormLabel>
            <Select placeholder="Domain" id="dom" name="dom" onChange={(e) => handle(e)} value={data.dom} >
            
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        
            </Select>
            <br/>
            <br/> 
            
            <FormLabel>Cover Image</FormLabel>
            <InputGroup>
            <Input  placeholder="Upload an image" >
             </Input>
             <InputRightElement  children={
                 
             <Flex>
                <IconButton 
                
                aria-label="Search database"
                icon={<BsUpload />} />
            <Input type="file" display="none"  />
             </Flex>
             
             } />   
            </InputGroup>
            <br/>
            <FormLabel>Event Platform</FormLabel>
            <Input placeholder="Zoom" id="plat" name="plat" onChange={(e) => handle(e)} value={data.plat} /><br/><br/>
            <FormLabel>Event link </FormLabel>
            <Input placeholder="Enter the event url" id="link" name="link" onChange={(e) => handle(e)} value={data.link} /><br/><br/>

            <FormLabel>Rules of the Event</FormLabel>
            <Textarea placeholder="Rules" id="rule" name="rule" onChange={(e) => handle(e)} value={data.rule}/><br/><br/>

            <FormLabel>Instructor/ Organizer</FormLabel>
            <Input placeholder="Enter the instructor's name" id="inst" name="inst" onChange={(e) => handle(e)} value={data.inst} /><br/><br/>

            <FormLabel>Organizer Details</FormLabel>
            <Textarea placeholder=" Details of the organizer " id="det" name="det" onChange={(e) => handle(e)} value={data.det}/><br/><br/>

             
            <FormLabel>Instructor Image</FormLabel>
            <InputGroup>
            <Input  placeholder="Upload instructor image" >
             </Input>
             <InputRightElement  children={
                 
             <Flex>
                <IconButton 
               
                aria-label="Search database"
                icon={<BsUpload />} />
            <Input type="file" display="none"  />
             </Flex>
             
             } />   
            </InputGroup><br/>


            <FormLabel>Difficulty level</FormLabel>
            <Select placeholder="Difficulty"  id="diff" name="diff" onChange={(e) => handle(e)} value={data.diff} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            </Select><br/>
            <Box bg="#E3E8F2" p="32px" borderRadius="12px" 	     background="#F2F6FE">
            <Box>
            <HStack spacing={0} >
            <Box width="2xs" >
            <FormLabel fontSize="12px">Prizes/Rewards Name</FormLabel>
            
            </Box>
            <Box width="xs">
            <FormLabel fontSize="12px">Prizes/Rewards</FormLabel>
            </Box>
            </HStack>
             </Box>

             {fields.map((field, idx) => {
            return(
            <Box >
            <HStack spacing={6}>
            <Box width="sm">
           
            <Input borderRadius="12px" background="#F2F6FE"placeholder="0" value={field.fn || ""}
              onChange={e => handleChangef(idx, e)} />
            </Box>
            <Box width="sm">
           
            <Input borderRadius="12px" background="#F2F6FE"  placeholder="0" value={field.ln || ""}
              onChange={e => handleChangel(idx, e)} />
            </Box>

            <IconButton icon={<DeleteIcon  w={6} h={6}/>} onClick={() => handleRemove(idx)}/>
            </HStack>
            <br/>
             </Box>);

            })}
            
            <Button type="Upload" width="xs" mt="8px"backgroundColor="blue" color="white" textAlign="center" onClick={() => handleAdd()}> Add Prize/Reward </Button>
            </Box>
            <br/> 
            <FormLabel>Event Price</FormLabel>
            <Input placeholder="Price of the Event" id="price" name="price" onChange={(e) => handle(e)} value={data.price} />
            <br/> <br/>
            <HStack spacing={6}>
            <Box width="sm">
            <FormLabel>Start Time</FormLabel>
            <Input placeholder="HH:MM : AM/PM" id="start" name="start" onChange={(e) => handle(e)} value={data.start} />
            </Box>
            <Box width="sm">
            <FormLabel>End Time</FormLabel>
            <Input placeholder="HH:MM : AM/PM" id="end" name="end" onChange={(e) => handle(e)} value={data.end}  />
            </Box>
            </HStack>

            <Button type="Submit" width="sm" mt="8px"backgroundColor="blue" color="white" textAlign="center"> Upload </Button>

            </FormControl>
            </form>
     );
}
 
export default FormNewEvent;