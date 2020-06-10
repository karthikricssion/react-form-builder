import React from 'react';
import { INPUT_TYPES, LABEL_ELEMENTS } from '../const';

class InputProperties extends React.Component {
    updateOnChange = (event) => {
        console.log(event.target.value)
        this.props.onUpdate({
            placeholder: event.target.value
        }, this.props.formElement.id)
    }

    render() {
        return (
            <>
                <label>Placeholder</label>
                <input type="text" 
                    defaultValue={this.props.formElement.properties.placeholder}
                    onChange={this.updateOnChange.bind(this) } 
                />
            </>
        )
    }
}

class ButtonProperties extends React.Component {
    updateOnChange = (event) => {
        this.props.onUpdate({
            name: event.target.value
        }, this.props.formElement.id)
    }

    render() {
        return (
            <>
                <label>Button Text</label>
                <input type="text" 
                    defaultValue={this.props.formElement.properties.name}
                    onChange={this.updateOnChange.bind(this) } 
                />
            </>
        )
    }
}

class LabelProperties extends React.Component {
    updateOnChange = (event) => {
        this.props.onUpdate({
            name: event.target.value
        }, this.props.formElement.id)
    }

    render() {
        return (
            <>
                <label>Text</label>
                <input type="text" 
                    defaultValue={this.props.formElement.properties.name}
                    onChange={this.updateOnChange.bind(this) } 
                />
            </>
        )
    }
}

var MAP_ELEMENT_COMPONENT = {}
MAP_ELEMENT_COMPONENT[INPUT_TYPES.LABEL] = LabelProperties
MAP_ELEMENT_COMPONENT[INPUT_TYPES.BUTTON] = ButtonProperties
MAP_ELEMENT_COMPONENT[INPUT_TYPES.TEXT_INPUT] = InputProperties

const ElementSettings = (props) => {
    let ElementProperties = MAP_ELEMENT_COMPONENT[props.item.type]

    const handleUpdateSetting = (element, id) => {
        props.onClickUpdate(id, element)
    }

    const handleCancel = () => {
        props.onClickCancel()
    }

    if(props.show) {
        return (
            <div className={ ` element-settings-slider ${props.show ? 'show' : ''}` }>  
                <h4>
                    { LABEL_ELEMENTS[props.item.type] } Properties
                    <span className="close-btn" onClick={ handleCancel } >X</span>
                </h4>
    
                <div className="settings-form">
                    {   
                        <ElementProperties 
                            onUpdate={ handleUpdateSetting } 
                            formElement={props.item} 
                            key={props.item.id}
                        /> 
                    }
                </div>
            </div>
        )       
    } else {
        return null
    }
}

export default ElementSettings