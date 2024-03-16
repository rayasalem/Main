import React from 'react';
import Navbar from '../Navbar/Navbar';
import download from './download.png';
import './SectionOne.css'; 

const SectionOne = () => {
    return (
        <div>
            <Navbar />
            <div className="section-one">
                <img src={download} alt="Background" />
                <div className="section-one-content">
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                <div className="section-one-buttons">
                    <button style={{ backgroundColor: 'blue', color: 'white' }}> lll Ui kit</button>
                    <button style={{ backgroundColor: 'white', color: 'black' }}> lll Ui kit</button>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;
