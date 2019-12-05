import React from 'react';
import { Link } from 'react-router-dom';


const Firstpage = () => {
    return (
        <>
        <div>

        <Link to="../Login/LoginPage">
            C'est la première page lol
        </Link>
        </div>
        <div>

        <Link to='../Map'>
            Map
        </Link>
        </div>
        </>
    )
}

export default Firstpage;