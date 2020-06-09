import React from 'react';

const FormElement = () => {

    const dragStart = (e) => {
        console.log('Element drag start')
    }

    const dragEnd = (e) => {
        console.log('Element drag End')
    }

    return (
        <>
            <li 
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                draggable='true'
                >
                Hello world!
            </li>
        </>
    )
}

export default FormElement