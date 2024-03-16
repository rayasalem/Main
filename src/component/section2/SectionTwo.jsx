import React from 'react';
import download from './download.png';

import './SectionTwo.css'; 

const SectionTwo = () => {
    return (
        <div className="section-two">
            <img src={download} alt="Background" />
            <div className="section-content">
                <h1>Light, Fast & Powerful</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className="end-paragraphs">
                    <div className="end-paragraph">
                        <h4>Light, Fast & Powerful</h4>
                        <p>  nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <div className="end-paragraph">
                        <h4>Light, Fast & Powerful</h4>
                        <p>   nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;
