import React from 'react';
import 'animate.css';



const ImageLinkForm = () => {
    return (
        <div className="p-3 animate__animated animate__backInUp">
            <div className="card">
                <div className="card-body">
                    <p><strong>{'This Smart Brain will detect faces in your photo! Give it a try!'}</strong></p>
                    <div className="container">
                        <div className="row p-3">
                            <div className="col col-md-10">
                                <input type="text" className="form-control center"/> 
                            </div>
                            <div className="col col-md-2">
                                
                                <button className="btn btn-primary">Detect</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;