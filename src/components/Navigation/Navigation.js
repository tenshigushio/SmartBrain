import React from 'react';


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container-fluid">
            
                <div className="Tilt-inner"><img alt="Smart Brain" src="./SmartBrain200x63.png"/></div>
                
                
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className="btn">Sign Out</button>
                </div>
           </div>
        </nav>
    );
}

export default Navigation;