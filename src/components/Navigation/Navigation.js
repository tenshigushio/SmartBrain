import React from 'react';
import Tilt from 'react-tilt';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container-fluid">
                <Tilt className="Tilt" options={{ max : 30 }} >
                    <div className="Tilt-inner"><img alt="Smart Brain" src="./SmartBrain200x63.png"/></div>
                </Tilt>
                
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className="btn">Sign Out</button>
                </div>
           </div>
        </nav>
    );
}

export default Navigation;