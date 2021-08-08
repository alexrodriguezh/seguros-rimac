import React from 'react'
import styled from 'styled-components';
import Formulary from './components/Formulary';
import Left from './components/Left';

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width:1202px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const App = () => {



  return (
    <Contenedor>
      <Left />
      <Formulary />
    </Contenedor>
  );
}

export default App;
