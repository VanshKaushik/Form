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
   
  } from "@chakra-ui/react"
  import { useForm } from "react-hook-form";
  import { IconButton } from "@chakra-ui/button";
  import { useState } from "react";
  import {Input} from "@chakra-ui/input";
  import { BsUpload } from "react-icons/bs";
import InputTags from "./InputTags";
  

const FormCourse = () => {
    
    const handleClick = event => {
    };
    const h = event => {
    };
    const [data,setData] = useState({
        title:"",
        desc:"",
        dom:"1",
        insd:"",
        
        link:"",
        ment:"",
        qual:"",
        prof:"",
        det:"",
        res:"",
        diff:"",
        ass:"",
        fee:"",
        price:"",
        
      })
      function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        
  
  
      }
      function submit(e) {
        
        e.preventDefault();
        
        console.log(data.title+"\n"+data.desc+"\n"+ data.dom + "\n"+ data.insd +"\n"+data.link+"\n"+data.ment+"\n"+data.qual+"\n"+data.prof+ "\n"+data.det +"\n"+data.res+ "\n"+ data.diff +"\n"+data.ass+ "\n"+data.fee + "\n"+data.price);
        
        
      }
  



    
    const selectedTags = tags => {
		console.log(tags);
	};





    return ( 
        <form onSubmit={(e) => submit(e)}>
        <FormControl id="course" spacing={6} >
        
        <FormLabel>Course Title</FormLabel>
        <Input placeholder="Enter the title of the course" id="title" onChange={(e) => handle(e)} value={data.title} name="title"/>
        <br/><br/>
        <FormLabel>Course Description</FormLabel>
        <Textarea placeholder="Course Description"  id="desc" name="desc" onChange={(e) => handle(e)} value={data.desc}  />
        <br/><br/>
        <FormLabel>Course Image</FormLabel>
        
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
        <FormLabel>Domain</FormLabel>
        <RadioGroup id="dom" name="dom" onChange={(e) => handle(e)} value={data.dom}>
        <Stack direction="row">
            <Radio value="1">Engineering</Radio>
            <Radio value="2">Non-Engineering</Radio>
            <Radio value="3">Both</Radio>
        </Stack>
        </RadioGroup>
        <br/>
        <FormLabel>Industry</FormLabel>
        <Select placeholder="Choose Domain" id="insd" name="insd" onChange={(e) => handle(e)} value={data.insd} >

        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        
        </Select>
        <br/>
        <FormLabel>Course link (zoom link)</FormLabel>
        <Input placeholder="Enter the link for the course" id="link" name="link" onChange={(e) => handle(e)} value={data.link} />
        <br/><br/>
        <FormLabel>Mentor Name</FormLabel>
        <Input placeholder="Enter the course mentor's name" id="ment" name="ment" onChange={(e) => handle(e)} value={data.ment} />
        <br/><br/>
        <FormLabel>Mentor Qualifications</FormLabel>
        <Input placeholder="Enter the course mentor's qualifications"  id="qual" name="qual" onChange={(e) => handle(e)} value={data.qual}/> 
        <br/><br/>
        <FormLabel>Mentor Job Profile</FormLabel>
        <Input placeholder="Enter the  course mentor's profile" id="prof" name="prof" onChange={(e) => handle(e)} value={data.prof} />
        <br/><br/>
        <FormLabel>Mentor Details</FormLabel>
        <Textarea placeholder="Write details on work history "  id="det" name="det" onChange={(e) => handle(e)} value={data.det} />
        <br/><br/>
        <FormLabel>Resources</FormLabel>
        <Textarea placeholder="Enter Resources "  id="res" name="res" onChange={(e) => handle(e)} value={data.res} />
        <br/><br/>
        <HStack spacing={6}>
        <Box width="sm">
        <FormLabel>Difficulty level</FormLabel>
        <Select placeholder="Difficulty"  id="diff" name="diff" onChange={(e) => handle(e)} value={data.diff}>
        <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            </Select>
        </Box>
        <Box width="sm">
        <FormLabel>No. of Assignments</FormLabel>
        <Input placeholder="0"   id="ass" name="ass" onChange={(e) => handle(e)} value={data.ass}/>
        </Box>
        </HStack>
        <HStack spacing={6}>
        <Box width="sm">
        <FormLabel>Course Type</FormLabel>
        <Select placeholder="Course Fee"id="fee" name="fee" onChange={(e) => handle(e)} value={data.fee}  >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        
        </Select>
        </Box>
        <Box width="sm">
        <FormLabel>Cost</FormLabel>
        <Input placeholder="0" id="price" name="price" onChange={(e) => handle(e)} value={data.price} />
        </Box>
        </HStack>
        <br/>
        <FormLabel>Technologies Covered</FormLabel>
        
        
        <InputTags selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
        <br/>
        <Button type="Upload" width="sm" mt="8px"backgroundColor="blue" color="white" textAlign="center"> Upload </Button>
        
        
        </FormControl>
       </form>
     );
}
 
export default FormCourse;