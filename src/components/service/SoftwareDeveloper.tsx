import React from 'react';

const SoftwareDeveloper: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-xl-5">
                    <div className="text-container">
                        <h1 className="h1-large">Software Development</h1>
                        <p className="p-large">
                        Thay offers tailored training and certification for students, job seekers, professionals, and corporate teams. Learn from industry experts and benefit from skills assessments and upgrade programs to keep your skills up-to-date.
                        </p>
                      
                    </div> {/* end of text-container */}
                </div> {/* end of col */}
                <div className="col-lg-5 col-xl-7">
                    <div className="image-container">
                        <img className="img-fluid" src="images/header.png" alt="alternative" />
                    </div> {/* end of image-container */}
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> 
    );
}

export default SoftwareDeveloper;
