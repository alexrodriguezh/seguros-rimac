import React from 'react'
import Group from './Group'
import Input from './Input'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Container = styled.div`
    margin: 0 2rem 0 7rem;
`
const Titulo = styled.p`
    font-size: 30px;
    color: #7783A6;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 100;
    margin-bottom: 1rem;
    & > span {
        margin-left: 0.5rem;
        color: #2F80ED;
        font-weight: 600;
    }
`
const SubTitulo = styled.p`
    font-size: 20px;
`
const Button = styled.button`
    background: #2F80ED;
    color: white;
    font-size: 15px;
    padding: 20px 35px;
    border-radius: 5px;
    border: none;
`;

const MensajeError = styled.div`
    background: #FF784B;
    border-left: 4px solid red;
    padding: 1px 15px;
    & > p {
        color: white;
        font-weight: 500;
        font-size: 10px;
    }
`

const Formulary = () => {

    const formik = useFormik({
        initialValues: {
            numero: '',
            fecha: '',
            celular: ''
        },
        validationSchema: Yup.object({
            numero: Yup.number().required('El número de documento es obligatorio'),
            fecha: Yup.date().required('La fecha de nacimiento es obligatorio'),
            celular: Yup.number().required('El número de celular es obligatorio')
        }),
        onSubmit: valores =>{
            console.log('Enviando valores')
            console.log(valores)
        }
    })


    return (
        <Container>
            <Titulo>
                Obtén tu
                <span>seguro ahora</span>
            </Titulo>
            <SubTitulo>Ingresa los datos para comenzar</SubTitulo>
            <form onSubmit={formik.handleSubmit}>
                <Group
                    id="numero"
                    label="Nro de Documento"
                    value={formik.values.numero}
                    onChange={formik.handleChange}
                    
                />
                { formik.touched.numero && formik.errors.numero ? (
                    <MensajeError>
                        <p>{formik.errors.numero}</p>
                    </MensajeError>
                ) : null }
                <Input
                    id="fecha"
                    type="date"
                    label="Fecha de Nacimiento"
                    value={formik.values.fecha}
                    onChange={formik.handleChange}
                    
                />
                { formik.touched.fecha && formik.errors.fecha ? (
                    <MensajeError>
                        <p>{formik.errors.fecha}</p>
                    </MensajeError>
                ) : null }
                <Input
                    id="celular"
                    type="tel"
                    label="Celular"
                    value={formik.values.celular}
                    onChange={formik.handleChange}
                    
                />
                { formik.touched.celular && formik.errors.celular ? (
                    <MensajeError>
                        <p>{formik.errors.celular}</p>
                    </MensajeError>
                ) : null }
                <Input 
                    type="checkbox"
                    label="Acepto la Política de Datos Personales y los Términos y Condiciones"
                />
                <Input 
                    type="checkbox"
                    label="Acepto la Política de Envío de Comunicación Comercial"
                />

                <Button type="submit">COMENCEMOS</Button>
            </form>
            
        </Container>
    )
}

export default Formulary
