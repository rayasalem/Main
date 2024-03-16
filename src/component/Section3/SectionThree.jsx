import React from 'react';
import Capture from './Capture.JPG';
import './SectionThree.css'; 

const SectionThree = () => {
    return (
        <div className="section-three">
            {/* Include SectionOne and SectionTwo components here */}
            <div className="section-three-content">
                <img src={Capture} alt="Background" />
                <div className="section-three-text">
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
