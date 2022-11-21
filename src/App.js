import React, { useState } from 'react';
import Form from './Form';
import Container from "./Container";
import currencies from "./currencies";



function App() {
 
  const [result, setResult] = useState();
  
  const convert = (content, currency) => {
   const rate = currencies.find(({short}) => short === currency).rate;

   setResult({
    sourceContent: +content,
    targetContent: content / rate,
    currency,

   });
   };
 
  return (
    <Container>
     <Form convert={convert} result={result}/>

    </Container>
  );
}

export default App;
