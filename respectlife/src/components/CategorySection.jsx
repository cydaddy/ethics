import React from 'react';
import ExampleCard from './ExampleCard';
import './CategorySection.css';

const CategorySection = ({ title, items, color, onCardClick }) => {
    return (
        <section className="category-section" style={{ '--section-color': color }}>
            <h2 className="section-title">
                <span className="title-deco">✨</span> {title}
            </h2>
            <div className="card-grid">
                {items.map((item, index) => (
                    <ExampleCard
                        key={index}
                        {...item}
                        onClick={() => onCardClick(item)}
                    />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
