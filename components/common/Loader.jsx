import React from 'react';

const Loader = ({ className }) => {
    return (
        <div className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 ${className}`} style={{ zIndex: 10 }}>
            <div className="loader"></div>
        </div>
    );
};

export default Loader; 