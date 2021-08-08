import React from 'react'
import styled from 'styled-components'
import imagen from '../assets/Base.png'
import ilustracion from '../assets/Illustration-1.png'
import LeftBox from './LeftBox'


const ContainerLeft = styled.div`
    display: flex;
    position: relative;
`

const Imagen = styled.img`
    background-repeat: no-repeat;
    height: calc(100vh - 50px);
    width: 100%;
    background-size: calc(65vw - 150px) calc(100vh - 50px);
`

const Illustration = styled.img`
    background-repeat: no-repeat;
    background: transparent;
    height: 60%;
    width: 60%;
    bottom: 3rem;
    right: -9rem;
    position: absolute;
`

const Left = () => {
    return (
        <ContainerLeft>
            <LeftBox />
            <Imagen 
                src={imagen}
            />
            <Illustration 
                src={ilustracion}
            />
        </ContainerLeft>
    )
}

export default Left