import React from 'react';
import { getMousePosition } from '../utils'
import { INPUT_TYPES } from '../const';

const FormElement = (props) => {
    let formElementRef = React.createRef();
    const renderElements = (type) => {
        
        switch(type) {
            case INPUT_TYPES.LABEL: return <label>{ props.item.properties.name }</label>;
            case INPUT_TYPES.TEXT_INPUT: return <input type="text" placeholder={ props.item.properties.placeholder } />;
            case INPUT_TYPES.BUTTON: return <button>{ props.item.properties.name }</button>;
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
        formElementRef.current.classList.remove('dragging')
    }

    const onDeleteElement = () => {
        props.onDeleteElement(props.item.id)
    }
    
    return (
        <div 
            className={`form-item ${ props.isSelectedId === props.item.id ? 'selected' : '' } `}
            draggable="true"
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            style={{
                top: `${props.item.pos.y}px`,
                left: `${props.item.pos.x}px`,
            }}
            ref={formElementRef}
            onClick={ function() {
                return props.onClick(props.item)
            }}
            > 
            { renderElements(props.item.type) }

            <span onClick={ onDeleteElement } className="delete-icon">x</span>
        </div>
    )
}

export default FormElement