import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../../constants/ROUTES'

const Navigation = () => (
    <div>
        <li>
            <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li>
            <Link to={ROUTES.APP}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.MAIN}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.REGISTER}>Register</Link>
        </li>
        <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
    </div>
)

export default Navigation;
