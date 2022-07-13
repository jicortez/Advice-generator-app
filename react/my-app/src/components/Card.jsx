import React from "react";
import styled from 'styled-components'

//CSS conStyled Components

const ContenedorButCard = styled.div`
    background-color: hsl(217, 19%, 24%);
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: hsl(193, 38%, 86%);
    border-radius: 10px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    box-shadow: 8px 8px 15px 1px black;
    @media (min-width: 360px) {
        width: 380px;
        height: 380px;
//        background-color: red;
    }
    @media (min-width: 600px) {
        width: 550px;
        height: 350px;
//        background-color: green;
    }
    @media (min-width: 900px) {
        width: 750px;
        height: 450px;
//        background-color: beige;
    }
`
const ContenedorTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 80%;
`
const Titulo = styled.h3`
color:  hsl(150, 100%, 66%);
    font-size: 13px;
    margin-top: 9%;
    @media (min-width: 360px) {
        font-size: 15px;
    }
    @media (min-width: 600px) {
        font-size: 16px;
    }
    @media (min-width: 900px) {
        font-size: 18px;
    }
`
const Frase = styled.p`
    font-size: 22px;
    @media (min-width: 360px) {
        font-size: 23px;
    }
    @media (min-width: 600px) {
        font-size: 25px;
    }
    @media (min-width: 900px) {
        font-size: 28px;
    }
`
const ContenedorLinea = styled.div`
    width: 100%;
    position: relative;    
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Linea =styled.div`
    height: 2px;
    width: 80%;
    background-color:  hsl(217, 19%, 38%);
    position: relative;
`
const Circulo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: hsl(217, 19%, 24%);
    z-index: 4;
    position: absolute;
    top: -17px;

`
const Lineas = styled.div`
    background-color: hsl(193, 38%, 86%);
    height: 15px;
    width: 5px;
    border-radius: 25%;
    
`
const Lineas2 = styled.div`
    background-color: hsl(193, 38%, 86%);
    height: 15px;
    width: 5px;
    border-radius: 25%;
`
const Boton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin-bottom: -25px;
    background-color: hsl(150, 100%, 66%);
    border-color: hsl(150, 100%, 66%);
    margin-top: 40px;
    &:hover {
    box-shadow: 0px 0px 5px 5px hsla(150.17341040462426, 100%, 66.07843137254902%, 0.623);
}
`
const Cuadrado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(218, 23%, 16%);
    height: 23px;
    width: 23px;
    border-radius: 5px;
`
const Punto = styled.div`
    background-color: hsl(150, 100%, 66%);
    height: 5px;
    width: 5px;
    border-radius: 50%;
`




//Componente CARD

function Card({state, onSubmit}) {
    if(state.id === undefined){
        return (
            <ContenedorButCard>
                <ContenedorTexto>
                    <Titulo>ADVICE # 128</Titulo>
                    <Frase>"When you're at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket."</Frase>
                </ContenedorTexto>
                <ContenedorLinea>
                    <Linea></Linea>
                    <Circulo><Lineas></Lineas><Lineas2></Lineas2></Circulo>
                </ContenedorLinea>
                <Boton type="button" onClick={onSubmit}><Cuadrado><Punto></Punto></Cuadrado></Boton>
            </ContenedorButCard>
        )
    }else {
        return (
            <ContenedorButCard>
                <ContenedorTexto>
                    <Titulo>ADVICE # {state.id}</Titulo>
                    <Frase>"{state.advice}"</Frase>
                </ContenedorTexto>
                <ContenedorLinea>
                    <Linea></Linea>
                    <Circulo><Lineas></Lineas><Lineas2></Lineas2></Circulo>
                </ContenedorLinea>
                <Boton type="button" onClick={onSubmit}><Cuadrado><Punto></Punto></Cuadrado></Boton>
            </ContenedorButCard>
            )
    }
    
}

export default Card;
