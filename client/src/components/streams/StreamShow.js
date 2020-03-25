import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchProfile, fetchStream } from "../../actions";
import StreamChat from "./StreamChat";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    if (!this.props.profile) {
      this.props.fetchProfile(this.props.stream.userId);
    }
    const { title, description } = this.props.stream;
    const username = this.props.profile && this.props.profile.username;
    return (
      <div class="ui grid">
        <div id="stream-container" class="twelve wide column">
          <video ref={this.videoRef} style={{ width: "100%" }} controls />
          <h1>{title}</h1>
          <h5>{description}</h5>
          <h5>{username || 'Username'}</h5>
        </div>
        <StreamChat />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  const userId = state.streams[streamId] && state.streams[streamId].userId;
  return {
    stream: state.streams[streamId],
    profile: state.profiles[userId]
  };
};

export default connect(
  mapStateToProps,
  { fetchProfile, fetchStream }
)(StreamShow);
