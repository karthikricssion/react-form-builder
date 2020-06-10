import React, { useState } from 'react';

const TopBar = (props) => {
    let [ saveStatus, setSaveStatus ] = useState(false)

    const onClickSave = () => {
        setSaveStatus(true)

        props.onClickSave()
        
        setTimeout(() => {
            setSaveStatus(false)
        }, 1000 )
    }

    return (
        <div className="top-bar">
            
            {
                saveStatus && <span className="form-saved-text"> ✔ Saved</span>
            }

            <button onClick={ () =>  props.onClickReset() } className="btn-primary cancel">Reset</button>
            <button onClick={ onClickSave } className="btn-primary">Save</button>
        </div>
    )
}

export default TopBar