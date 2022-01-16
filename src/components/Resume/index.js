import React from 'react';
import Typed from 'react-typed';

const Resume = () => {
    return (
        <div className="typed-text col-6">
        <Typed strings={['Resume']}
        typeSpeed={70}
        backSpeed={60}
        loop
        ></Typed>
        </div>
    )
}

export default Resume;