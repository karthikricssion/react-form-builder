import React from 'react';
import { getMousePosition } from '../utils'

const FormElement = (props) => {
    let formElementRef = React.createRef();
    const renderElements = (type) => {
        switch(type) {
            case 'text': return <label>Header</label>;
            case 'inputText': return <input type="text" />;
            case 'button': return <button>Button</button>;
            default: return null
        }
    }

    const dragStart = (e) => {
        var rect = formElementRef.current.getBoundingClientRect()
        formElementRef.current.classList.add('dragging')
        e.dataTransfer.setData('text/plain', JSON.stringify({
            isNew: false,
            id: props.item.id,
            mousePosition: getMousePosition(rect, e)
        }));
    }

    const dragEnd = (e) => {
        // console.log('drag-end')
        formElementRef.current.classList.remove('dragging')
    }
    
    return (
        <div 
            className="form-item"
            draggable="true"
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            style={{
                top: `${props.item.pos.y}px`,
                left: `${props.item.pos.x}px`,
            }}
            ref={formElementRef}
            > 
            { renderElements(props.item.type) }
        </div>
    )
}

export default FormElement