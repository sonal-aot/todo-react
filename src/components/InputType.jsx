import React from 'react';

const InputType = ({ className, placeholder, type, ...props }) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            type={type}
            {...props}
        />
    );
};

export default InputType;
