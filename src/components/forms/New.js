import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import ShortAnswer from "./fields/ShortAnswer";
import MultiChoice from "./fields/MultiChoice";

const required = (value) => value ? undefined : "This is required";

class NewForm extends Component {
    renderField(type) {
        switch(type) {
            case "SHORT_ANSWER":
                return ShortAnswer;
            default: 
                return MultiChoice;
        }
    } 


    render() {
        const {data} = this.props;
        return (
            <form>
                {data.map((question) => {
                    return (
                        <Field
                            name="test"
                            component={this.renderField(question.respType)}
                            validate={[required]}
                        />
                    )
                })}
                
            </form>
        );
    }
}

export default reduxForm({
    form: "new"
})(NewForm);