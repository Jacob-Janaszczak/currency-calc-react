import React from 'react';
import Form from './Form';
import Container from "./Container";



function App() {
 
  const convert = (setContent) => {
    alert(setContent)
    console.log("elo");

  };
 
  return (
    <Container>
     <Form convert={convert}/>

    </Container>
  );
}

export default App;
