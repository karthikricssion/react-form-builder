import React from 'react';
import FormElement from './formelement/FormElement'

const SideBar = () => {
    const formUIElements = [
        {
            type: 'text',
            label: 'Header',
            imageIconName: 'heading'
        },
        {
            type: 'inputText',
            label: 'Text Field',
            imageIconName: 'text-input'
        },
        {
            type: 'button',
            label: 'Button',
            imageIconName: 'button'
        }
    ]

    return (
        <div className="cflex full-height form-elements">
            <ul>
                {formUIElements.map((item, index) =>
                    <FormElement key={index} item={item} />
                )}
            </ul>
        </div>
    )
}

export default SideBar