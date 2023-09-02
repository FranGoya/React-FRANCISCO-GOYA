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
            <div className='counter'>
                <Box>
                    <button onClick={restar}>-</button>
                </Box>
                <p>{contador}</p>
                <Box>
                    <button onClick={sumar}>+</button>
                </Box>
                <button onClick={vaciar}>Vaciar</button>
                <button onClick={onAdd}>Mostrar cantidad</button>
            </div>
        </>
    )
}

export default ItemCount
