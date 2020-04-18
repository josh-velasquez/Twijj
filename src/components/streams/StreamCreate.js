import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label className="white-text">{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div id="page-content" className="ui grid stackable">
        <div id="page-container">
          <div
            className="content-scrollable white-text"
            style={{ paddingLeft: 5 }}
          >
            <div style={{ padding: "10px 50px" }}>
              <h2 className="sub-header">Create Stream</h2>
              <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <Field
                  name="title"
                  component={this.renderInput}
                  label="Enter Title"
                />
                <Field
                  name="description"
                  component={this.renderInput}
                  label="Enter Description"
                />
                <Field
                  name="gametag"
                  component={this.renderInput}
                  label="Enter Game Tag"
                />
                <button className="ui button primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  if (!formValues.gametag) {
    errors.gametag = "You must enter a game tag";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
