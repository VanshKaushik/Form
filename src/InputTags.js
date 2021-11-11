import { Box } from "@chakra-ui/layout";
import { UnorderedList,ListItem } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { useState } from "react";
import { border } from "@chakra-ui/styled-system";
const InputTags = (props) => {
    const [tags, setTags] = useState(props.tags);
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return ( 
   
        <Flex alignItems="flex-start" flexWrap="wrap" minHeight="48px"  background="#F2F6FE" borderRadius="10px" _focusWithin={{border :"1px"}}
        >
			<UnorderedList listStyleType="none" id="tags" display="flex" flexWrap="wrap">
				{tags.map((tag, index) => (
					<ListItem 
                    key={index} 
                    className="tag" 
                    width="auto"
                    height="30px" 
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="#fff"
                    paddingLeft="px"
                    marginTop="8px"
                    marginRight="6px"
                   
                    
                    listStyle= "none"
                    borderRadius="6px"
                    background="#0052cc"

                    >
						<Flex className='tag-title'
                        fontSize="12px"                        
                        >{tag}</Flex>
						<Flex className='tag-close-icon'
                            display="block"
                            width="10px"
                            height="10px"
                            fontSize="17px"
                            cursor="pointer"
                            paddingLeft="1px"
                            paddingRight="2px"
                            textAlign="center"
                            marginLeft="3px"
                            marginBottom="18px"
							onClick={() => removeTags(index)}
						>
							x
						</Flex>
					</ListItem>
				))}
			</UnorderedList>
			<Input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder=" "
                flex="1"
                border="none"
                height="46px"

                _focus={{outline:"transparent"}}
                


			/>
		</Flex>


     );
}
 
export default InputTags;