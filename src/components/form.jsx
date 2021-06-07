import React, { Component } from 'react';
import Joi from 'joi-browser';
import TextInput from './textInput';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = {
      abortEarly: false
    };

    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let errorDetail of error.details) {
      errors[errorDetail.path[0]] = errorDetail.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const property = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(property, schema);
    return error ? error.details[0].message : null;
  };

  submitHandler = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  changeHandler = ({ currentTarget: input }) => {
    const { errors } = this.state;

    const data = { ...this.state.data };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    data[input.name] = input.value;
    this.setState({ data });
  };

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    return (
      <TextInput
        name={name}
        type={type}
        label={label}
        value={data[name]}
        error={errors[name]}
        changeHandler={this.changeHandler}
      />
    );
  }

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
}

export default Form;
