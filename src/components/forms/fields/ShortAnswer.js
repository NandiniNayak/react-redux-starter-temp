import React from "react";

const ShortAnswer = (props) => {
    const { input, meta } = props;
    return (
        <div>
            <label>{input.name}</label>
            <input type="text" {...input} />
            <i>{meta.touched && meta.error}</i>
        </div>
    )
}

export default ShortAnswer;