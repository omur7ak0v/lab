import React, {useRef, useState, useEffect} from 'react';
import DropDown from '../DropDown';
import './Menu.scss';

const Menu = ({ children, content }) => {
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const menuRef = useRef(null);

    const showDropDown = () => {
        setDropDownVisible(true);
    };

    const hideDropdown = () => {
        setDropDownVisible(false);
    };


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDropDownVisible(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className='Menu' ref={menuRef}>
            <span className='Menu__Item' onClick={showDropDown}>
                {children}
            </span>
            {dropDownVisible ? <DropDown hideDropDown={hideDropdown} content={content}/> : null}
        </div>
    );
};

export default Menu;