import React from 'react';

var getDropPosition = function($this, e) {
    return {
        x: e.clientX - $this.offsetLeft, 
        y: e.clientY - $this.offsetTop,
        width: $this.offsetWidth,
        height: $this.offsetHeight,
        left: $this.offsetLeft,
        top: $this.offsetTop
    }
};

const FormBuilder = () => {
    let dropZoneRef = React.createRef();
    
    const dragOver = (e) => {
        e.preventDefault()
    }

    const dragEnter = (e) => {
        e.preventDefault()
    }

    const dragLeave = (e) => {
        e.preventDefault()
    }

    const elementDrop = (e) => {
        e.preventDefault()
        console.log('Element Dropped!', getDropPosition(dropZoneRef.current, e))
    }

    return (
        <div 
            className="cflex full-height form-builder"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={elementDrop}
            ref={dropZoneRef}
            >
            PlayZone
        </div>
    )
}

export default FormBuilder;