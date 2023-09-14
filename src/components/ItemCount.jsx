import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import "../main.css"

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const restar = () => {
        setContador(contador - 1)
    }

    const sumar = () => {
        setContador(contador + 1)
    }
    const vaciar = () => {
        setContador(0)
    }

    const onAdd = () => {
        alert(contador)
    }

    return (
        <>
            <div className='contador'>
                <Button id='botonsuma' colorScheme='blue' onClick={sumarContador}>+</Button>
                <h4 className='numeroContador' >{contador}</h4>
                <Button id='botonresta' colorScheme='red' onClick={restarContador}>-</Button>
                <Spacer />
                <Button id='botonAlert' colorScheme='green' onClick={onAdd}>Agregar a Carrito</Button>
            </div>
        </>
    )
}

export default ItemCount
