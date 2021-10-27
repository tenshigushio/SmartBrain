import React from 'react';
import 'animate.css';
import 'hover.css';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="p-3 animate__animated animate__backInUp">
            <div className="card">
                <div className="card-body">
                    <p><strong>{'This Smart Brain will detect faces in your photo! Give it a try!'}</strong></p>
                    <div className="container">
                        <div className="row p-3">
                            <div className="col col-md-10">
                                <input type="text" className="form-control center" onChange={onInputChange}/> 
                            </div>
                            <div className="col col-md-2">
                                <div className="hvr-grow-rotate">
                                    <button className="btn btn-primary" onClick={onButtonSubmit} >Detect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ImageLinkForm;