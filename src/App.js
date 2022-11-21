import React from 'react';
import Form from './Form';
import Container from "./Container";



function App() {
 
  const convert = (content) => {
    alert(content)
    console.log(content);

  };
 
  return (
    <Container>
     <Form convert={convert}/>

    </Container>
  );
}

export default App;
