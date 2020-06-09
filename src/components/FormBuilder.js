import React from 'react';
import TopBar from './TopBar';
import FromElement from './FormElement';

var getNewformElementObj = function() {
    return {
        type: '',
        pos: {
            x: 0,
            y: 0
        }
    }
}

var generateUniqueId = function() {
    return Math.ceil(Math.random() * 10000000)
}


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

var calculatePositionOfDroppedItem = function(droppedItemPosition, draggedItemPosition) {
    var dropItemMeasurement = {
        width: 234,
        height: 45
    }
    
    var xPosition = (droppedItemPosition.x - draggedItemPosition.x)
    var yPosition = (droppedItemPosition.y - draggedItemPosition.y )

    if(xPosition < 0) {
        xPosition = 8
    } else if((xPosition + dropItemMeasurement.width) > droppedItemPosition.width) {
        xPosition = droppedItemPosition.width - dropItemMeasurement.width - 8
    }

    if(yPosition < 0) {
        yPosition = 8
    } else if((yPosition + dropItemMeasurement.height) > droppedItemPosition.height) {
        yPosition = droppedItemPosition.height - dropItemMeasurement.height - 8
    }

    return {
        x: xPosition,
        y: yPosition
    }
}

class FormBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            droppedItems: []
        }
        this.dropZoneRef = React.createRef();
    }

    dragOver = (e) => {
        e.preventDefault()
    }

    dragEnter = (e) => {
        e.preventDefault()
    }

    dragLeave = (e) => {
        e.preventDefault()
    }

    updateItemPositionById = (id, pos) => {
        this.setState({
            droppedItems: this.state.droppedItems.map((item) => {
                if(item.id === id) {
                    item.pos = pos
                    return item
                } 

                return item
            })
        })
    }

    elementDrop = (e) => {
        e.preventDefault()
        
        let draggedItemData = JSON.parse(e.dataTransfer.getData('text'))
        let droppedItemPos = getDropPosition(this.dropZoneRef.current, e)

        if(draggedItemData.isNew) {
            let formElement = getNewformElementObj()
            formElement.type = draggedItemData.type
            formElement.id = generateUniqueId()
            formElement.pos = calculatePositionOfDroppedItem(droppedItemPos, draggedItemData.mousePosition)
            
            this.setState(prevState => ({
                droppedItems: [...prevState.droppedItems, formElement]
            }))

        } else {
            let pos = calculatePositionOfDroppedItem(droppedItemPos, draggedItemData.mousePosition)
            this.updateItemPositionById(draggedItemData.id, pos)
        }
    }

    render() {
        return (
            <div className="cflex cflex-direction-col full-height form-builder">
                <TopBar />
                <div 
                    className="cflex full-height drop-zone"
                    onDragOver={this.dragOver}
                    onDragEnter={this.dragEnter}
                    onDragLeave={this.dragLeave}
                    onDrop={this.elementDrop.bind(this)}
                    ref={this.dropZoneRef}
                    >
                        <div>
                            { this.state.droppedItems.map(item => <FromElement key={item.id} item={item} />) }
                        </div>
                </div>
            </div>
        )
    }
}

export default FormBuilder;