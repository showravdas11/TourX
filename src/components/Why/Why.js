import React from 'react';
import './Why.css'

const Why = () => {
    return (
        <div className='tour-important'>
            <h4 className="text-center p-2">Why TourX</h4>
            <h1 className="text-center ">Why You Are Travel With <br /> Tourx</h1>

            <div className="container">
                <div className="row experience">
                    <div className="col-md-3 mt-5 skills">
                        <h3 className="text-center ">2000+ Our <br /> worldwide guide</h3>
                    </div>
                    <div className="col-md-3 mt-5 skills">
                        <h3 className="text-center "> 100% trusted travel <br /> agency</h3>
                    </div>
                    <div className="col-md-3 mt-5 skills">
                        <h3 className="text-center ">10+ year of travel <br /> experience</h3>
                    </div>
                    <div className="col-md-3 mt-5 skills">
                        <h3 className="text-center "> 90% of our traveller <br /> happy</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;