import React from 'react';
import { getMousePosition } from '../utils';

const FormElement = (props) => {
    let formElementRef = React.createRef();

    const dragStart = (e) => {
        var rect = formElementRef.current.getBoundingClientRect()
        e.dataTransfer.setData('text/plain', JSON.stringify({
            isNew: true,
            type: props.item.type,
            mousePosition: getMousePosition(rect, e)
        }));
    }

    return (
        <li 
            onDragStart={dragStart}
            draggable='true'
            ref={formElementRef}
            >
            <img 
                src={ require(`../assets/${props.item.imageIconName}.png`) } 
                alt={props.item.label} 
                className="img-responsive"
            />
            <span>{props.item.label}</span>
        </li>
    )
}

export default FormElement