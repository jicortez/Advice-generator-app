//CSS
import styled from 'styled-components';
import './App.css';
//Componentes
import Card from './components/Card.jsx';
import React, { useState } from 'react';

const ContenedorTotal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(218, 23%, 16%);
`

function App() {
  const[state, setState] = useState({});

  function onSubmit() {
    fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(response_json => {
      if(response_json.slip !== undefined) {
        const frase = {
          id: Math.round(response_json.slip.id),
          advice: response_json.slip.advice
        }
        setState(frase)
//        console.log(frase);
      }   
    })
    .catch(e => console.log(e));
  }

  return (
    <ContenedorTotal>
      <Card onSubmit={onSubmit} state={state} />
    </ContenedorTotal>
  );
}

export default App;
