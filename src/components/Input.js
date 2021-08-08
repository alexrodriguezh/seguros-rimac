import React, {useState} from 'react'
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    position: relative;
    margin-top: 30px;

    & > input {
        border: 1px solid #9BA4BF;
        border-radius: 0.25rem;
        outline: none;
        padding: 20px 5px 10px 25px;
        font-size: 16px;
        transition: all 0.2s ease;
        z-index: 500;

    }
    & > label {
        color: #757575;
        position: absolute;
        top: 15px;
        left: 25px;
        transition: all 0.2s ease;
        z-index: 501;

        ${props =>
            props.focused &&
            `
            font-size: 10px;
            transform: translateY(-12px) translateX(-5px);
            z-index: 501;
            background: none;
            padding: 0 7px;
        `}
    }
`;

const Input = ({
    value,
    type,
    label,
    onFocus,
    onBlur,
    ...props
}) => {
    const [focused, setFocused] = useState(false);

    const handleOnFocus = () => {
        setFocused(true);
        onFocus();
    };

    const handleOnBlur = () => {
        setFocused(false);
        onBlur();
    };

    const renderLabel = () => {
        if (label) {
        return <label>{label}</label>;
        }
        return null;
    };

    const isFocused = focused || String(value).length || type === "date";

    return (
        <InputContainer focused={isFocused} >
        {renderLabel()}
        <input
            value={value}
            type={type}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}

            {...props}
        />
        </InputContainer>
    );
};

Input.defaultProps = {
    type: "text",
    label: "",
    onFocus: () => {},
    onBlur: () => {}
};

export default Input;