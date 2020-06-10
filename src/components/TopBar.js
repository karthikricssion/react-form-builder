import React from 'react';

const TopBar = (props) => {
    return (
        <div className="top-bar">
            <button onClick={ () =>  props.onClickReset() } className="btn-primary cancel">Reset</button>
            <button onClick={ () => props.onClickSave() } className="btn-primary">Save</button>
        </div>
    )
}

export default TopBar