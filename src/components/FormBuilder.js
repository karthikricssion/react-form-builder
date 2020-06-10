import React from 'react';
import TopBar from './TopBar';
import FromElement from './FormElement';
import ElementSettings from './ElementSettings';
import { PROPERTIES_MAP } from  '../const';
import { saveFormInLocalStorage, getFormInLocalStorage, resetFormDatainLocalStorage } from '../utils';

var getNewformElementObj = function(type, id, pos) {
    return {
        type: type,
        id: id,
        pos: pos,
        isSelectedId: 0,
        properties: Object.assign({}, PROPERTIES_MAP[type])
    }
};

var generateUniqueId = function() {
    return Math.ceil(Math.random() * 10000000)
};

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

    // Add comments
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
};

class FormBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            droppedItems: getFormInLocalStorage(),
            showElementSettings: false,
            editElement: {}
        };
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
                } 
                return item
            })
        })
    }

    handleDroppedElement = (e) => {
        e.preventDefault()
        
        let draggedItemData = JSON.parse(e.dataTransfer.getData('text'))
        let droppedItemPos = getDropPosition(this.dropZoneRef.current, e)

        if(draggedItemData.isNew) {
            let type = draggedItemData.type
            let uniqeId = generateUniqueId()
            let position = calculatePositionOfDroppedItem(droppedItemPos, draggedItemData.mousePosition)
            let formElement = getNewformElementObj(type, uniqeId, position)
            
            this.setState(prevState => ({
                droppedItems: [...prevState.droppedItems, formElement]
            }))

        } else {
            let pos = calculatePositionOfDroppedItem(droppedItemPos, draggedItemData.mousePosition)
            this.updateItemPositionById(draggedItemData.id, pos)
        }
    }

    handleSave = () => {
        saveFormInLocalStorage(this.state.droppedItems)
    }

    handleReset = () => {
        resetFormDatainLocalStorage()
        this.setState({
            droppedItems: []
        })
    }

    editElementSettings = (item) => {
        this.setState({
            showElementSettings: true,
            isSelectedId: item.id,
            editElement: JSON.parse(JSON.stringify(item))
        })
    }

    handleElementSettingsCancel = () => {
        this.setState({
            showElementSettings: false,
            isSelectedId: 0
        })
    }

    handleUpdateElementSettings = (id, properties) => {
        this.setState({
            droppedItems: this.state.droppedItems.map((item) => {
                if(item.id === id) {
                    item.properties = properties
                } 
                return item
            })
        })
    }

    onDeleteElement = (id) => {
        this.setState({
            droppedItems: this.state.droppedItems.filter((item) => item.id !== id ),
        }, () => {
            this.setState({
                showElementSettings: false
            })
        })
    }

    render() {
        return (
            <div className="cflex cflex-direction-col full-height form-builder">
                <TopBar onClickSave={ this.handleSave }  onClickReset={ this.handleReset }/>
                <div 
                    className="cflex full-height drop-zone"
                    onDragOver={this.dragOver}
                    onDragEnter={this.dragEnter}
                    onDragLeave={this.dragLeave}
                    onDrop={this.handleDroppedElement.bind(this)}
                    ref={this.dropZoneRef}
                    >
                        <div>
                            { this.state.droppedItems.map((item) => {
                                return <FromElement 
                                    isSelectedId={ this.state.isSelectedId }
                                    onClick={ this.editElementSettings } 
                                    onDeleteElement = { this.onDeleteElement }
                                    key={item.id} 
                                    item={item}
                                />
                            }) }
                        </div>
                        <ElementSettings 
                            item={ this.state.editElement }
                            show={ this.state.showElementSettings } 
                            onClickCancel={ this.handleElementSettingsCancel }
                            onClickUpdate={ this.handleUpdateElementSettings }
                        />

                </div>
            </div>
        )
    }
}

export default FormBuilder;
 