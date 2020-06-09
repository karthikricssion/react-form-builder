import React from 'react';
import FormElement from './formelement/FormElement'

const FormElements = () => {
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
        <ul>
            {formUIElements.map((item, index) =>
                <FormElement key={index} item={item} />
            )}
        </ul>
    )
}

export default FormElements