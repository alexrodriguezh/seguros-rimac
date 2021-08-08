import React, {useState} from 'react'
import styled from "styled-components";

const GroupContainer = styled.div`
    display: flex;
    border-radius: 1rem;
    margin: 15px 0;
    position: relative;
    margin-top: 30px;

    & > select {
        width: 20%;
        background: white;
        color: gray;
        padding: 10px 5px 10px;
        font-size: 14px;
        border: 1px solid #9BA4BF;

        border-radius: 5px 0 0 5px;
        option {
            color: black;
            background: white;
            display: flex;
            white-space: pre;
            min-height: 20px;
            padding: 0px 2px 1px;
        }
    }

    & > input {
        width: 80%;
        border: 1px solid #9BA4BF;
        border-radius: 0 5px 5px 0;
        outline: none;
        padding: 20px 5px 10px 15px;
        font-size: 16px;
        transition: all 0.2s ease;
        z-index: 500;
    }
    & > label {
        color: #757575;
        position: absolute;
        top: 15px;
        left: 135px;
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

const Group = ({
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

    const isFocused = focused || String(value).length || type === "text";

    return (
        <GroupContainer focused={isFocused}>
            <select>
                <option value="" hidden>
                DNI
                </option>
                <option value="1">Cédula</option>
                <option value="2">Otro</option>

            </select>
            <input
                value={value}
                type={type}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                {...props}
            />
        </GroupContainer>
    );
};

Group.defaultProps = {
    type: "text",
    label: "",
    onFocus: () => {},
    onBlur: () => {}
};

export default Group;