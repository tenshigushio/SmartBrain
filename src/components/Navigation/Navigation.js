import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container-fluid">
                <a href="#home" className="navbar-brand">SmartBrain</a>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className="btn">Sign Out</button>
                </div>
           </div>
        </nav>
    );
}

export default Navigation;