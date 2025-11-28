import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, item }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <div className="modal-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                    <h2>{item.title}</h2>
                </div>

                <div className="modal-body">
                    <p className="modal-description">{item.description}</p>
                    <hr />
                    <div className="modal-detail-text">
                        {item.detailText.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
