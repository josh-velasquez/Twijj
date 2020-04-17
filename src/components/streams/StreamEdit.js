import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div className="white-text">Loading...</div>;
    }
    return (
      <div id="page-content" className="ui grid stackable">
        <div id="page-container">
          <div
            className="content-scrollable white-text"
            style={{ paddingLeft: 5 }}
          >
            <div style={{ padding: "10px 50px" }}>
              <h2 className="sub-header">Edit Stream</h2>
              <StreamForm
                initialValues={_.pick(
                  this.props.stream,
                  "title",
                  "description",
                  "gametag"
                )}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
