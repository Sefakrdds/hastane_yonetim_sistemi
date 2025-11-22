import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <label className="text-sm font-medium text-muted">{label}</label>}
            <input
                className="card"
                style={{ padding: '0.75rem', width: '100%' }}
                {...props}
            />
            {error && <span className="text-sm" style={{ color: 'var(--danger)' }}>{error}</span>}
        </div>
    );
};

export default Input;
