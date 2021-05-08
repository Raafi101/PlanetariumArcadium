import React, {Fragment} from 'react';
import './NavBar.css';

function Navbar() {

    function changeDir() {
        window.history.back()
    }

    return (
        <Fragment>
            <div className="nav-container">
                <nav className='navbar'>
                    <div id='btnDiv'>
                        <button id='backAni' onClick={changeDir}><i class="icofont-arrow-left"></i> Back</button>
                    </div>
                    <div className='navLogoDiv'>
                        <h1 id='navbarLogo'>
                            <a id='logoText' className='gradient-text' href='/'>Planetarium Arcadium<i className="icofont-space" /></a>
                        </h1>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar