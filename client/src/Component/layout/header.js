import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='headerbar'>
            <Link to='/marvel/page0'>
                <div className='logo font'>MARVEL</div>
            </Link>
        </div>
    )
}

export default Header