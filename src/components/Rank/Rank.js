import React from 'react';
import 'animate.css';

const Rank = () => {
    return (
        <div className="p-5 animate__animated animate__backInUp">
            <div>
                <h6>{'Mochi, your current rank is...'}</h6>
            </div>
            <div>
                <h4>{'#5'}</h4>
            </div>
        </div>
    );
}

export default Rank;