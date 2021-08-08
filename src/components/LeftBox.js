import React from 'react'
import styled from 'styled-components'
import shield from '../assets/shield.png'
import mobile from '../assets/mobile.png'
import money from '../assets/money.png'
import clinic from '../assets/clinic.png'

const Container = styled.div`
    position: absolute;
    height: 100%;
`
const Header = styled.header`
    font-size: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 5rem 0 0 8rem;
    & > span {
        font-weight: 700;
    }
`
const Body = styled.div`
    margin: 2rem 0 0 8rem;
    & > img {
        width: 20px;
        height: 20px;
    }
`

const Card = styled.div`
    display: flex;
    align-items: center;
`
const Imagen = styled.img`
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    background-size: calc(65vw - 150px) calc(100vh - 50px);
`
const Texto = styled.p`
    color: white;
    margin-left: 0.5rem;
`

const Footer = styled.p`
    position: absolute;
    color: #D2D4C5;
    bottom: 1rem;
    left: 8rem;
`
const LeftBox = () => {
    return (
        <Container>
            <Header>
                Seguro de
                <span>Salud</span>
            </Header>
            <Body>
                <Card>
                    <Imagen 
                        src={shield}
                    />
                    <Texto>Cómpralo de manera fácil y rápida</Texto>
                </Card>
                <Card>
                    <Imagen 
                        src={mobile}
                    />
                    <Texto>Cotiza y compra tu seguro 100% digital</Texto>
                </Card>
                <Card>
                    <Imagen 
                        src={money}
                    />
                    <Texto>Hasta S/. 12 millones de cobertura anual</Texto>
                </Card>
                <Card>
                    <Imagen 
                        src={clinic}
                    />
                    <Texto>Más de 300 clínicas en todo el Perú</Texto>
                </Card>
            </Body>
            <Footer>© 2020 Rimac Seguros y Reaseguros</Footer>
        </Container>
    )
}

export default LeftBox