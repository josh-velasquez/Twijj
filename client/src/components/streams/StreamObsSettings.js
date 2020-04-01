import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStreamServerIp } from "../../actions";

class StreamObsSettings extends React.Component {
  componentDidMount() {
    this.props.fetchStreamServerIp();
  }

  renderContent() {
    return (
      <div>
        <h3>
          Please enter the following information to your streaming platform
        </h3>
        <p>rtmp://{this.props.server.ip}/live</p>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Streamer Settings"
        content={this.renderContent()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { server: state.streamServer.serverIp };
};

export default connect(mapStateToProps, { fetchStreamServerIp })(
  StreamObsSettings
);
