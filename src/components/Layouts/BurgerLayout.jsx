import React from 'react';
import Burger from './Burger';

function BurgerLayout({ children }) {
    return (
        <>
            <Burger />
            <div>{children}</div>
        </>
    );
}

export default BurgerLayout;