import React from "react";
import _ from "lodash";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchProfile, editProfile } from "../../actions";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Placeholder from "./profile.jpeg";

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchProfile({id:this.props.match.params.id});
  }

  onSubmit = formValues => {
    this.props.editProfile(this.props.match.params.id, formValues);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button
          className="ui button primary"
          onClick={this.props.handleSubmit(this.onSubmit)}
        >
          Update
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

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
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderContent() {
    return (
      <form className="ui form error">
        <img src={Placeholder} className="ui image centered circular" height="150" />
        <Field name="username" component={this.renderInput} label="Username" />
        <Field name="bio" component={this.renderTextArea} label="Bio" />
      </form>
    );
  }

  render() {
    return (
      <Modal
        title="Profile"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "You must enter a Username";
  }
  return errors;
};

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: _.pick(
      state.profiles[ownProps.match.params.id],
      "username",
      "bio"
    ),
    enableReinitialize: true
  };
};

const formWrapped = reduxForm({
  form: "editProfile",
  validate
})(Profile);

export default connect(mapStateToProps, { fetchProfile, editProfile })(
  formWrapped
);
