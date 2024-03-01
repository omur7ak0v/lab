import React from 'react';
import './DropDown.scss';

const DropDown = ({content, hideDropDown}) => {
    return (
        <div className='DropDown' onBlur={hideDropDown}>
            {content}
        </div>
    );
};

export default DropDown;