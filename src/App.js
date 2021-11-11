import { ChakraProvider } from '@chakra-ui/react';
import Welcome_admin from './Welcome_admin';
function App() {
  return (
    <div className="App">
       <ChakraProvider>
        <Welcome_admin></Welcome_admin>
      </ChakraProvider>
      
     
    </div>
  );
}

export default App;
