import React from 'react';
import errorImage from "../../assets/404-notfound.png";

export default function NotFound() {
    return (
        <div className="w-100 overflow-hidden" style={{ height: '100vh' }}>
            <img 
                src={errorImage} 
                alt="Not Found" 
                className="w-100 h-100" 
                style={{ objectFit: 'fill' }} 
            />
        </div>
    );
}