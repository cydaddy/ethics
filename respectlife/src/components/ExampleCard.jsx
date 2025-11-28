import React from 'react';
import './ExampleCard.css';

const ExampleCard = ({ image, title, description, tags, onClick }) => {
    return (
        <div className="example-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExampleCard;
