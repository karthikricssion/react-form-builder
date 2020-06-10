import React from 'react';
import { INPUT_TYPES } from '../const';
import FormElement from './SideBarFormElement'

const SideBar = () => {
    const formUIElements = [
        {
            type: INPUT_TYPES.LABEL,
            label: 'Label',
            imageIconName: 'heading'
        },
        {
            type: INPUT_TYPES.TEXT_INPUT,
            label: 'Short Text',
            imageIconName: 'text-input'
        },
        {
            type: INPUT_TYPES.BUTTON,
            label: 'Button',
            imageIconName: 'button'
        }
    ]

    return (
        <div className="cflex full-height form-elements">
            <div className="form-elements-inner">
                <h4 className="form-app-logo">Form Builder</h4>
                <h4>Form Elements</h4>
                <ul>
                    {formUIElements.map((item, index) =>
                        <FormElement key={index} item={item} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SideBar