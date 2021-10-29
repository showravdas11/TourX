import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container mt-5">

                <h4 className="text-center  choose-packge">Choose Your Package</h4>

                <h1 className="text-center mt-3">Select Your Best Package <br /> For Your Travel</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        >

                        </Service>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Services;