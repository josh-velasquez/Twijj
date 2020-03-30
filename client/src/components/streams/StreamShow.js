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
    const { title, description } = this.props.stream;
    const username = this.props.stream.user_info && this.props.stream.user_info.username;
    return (
      <div class="ui grid">
        <div id="stream-container" class="twelve wide column">
          <div id="stream-container-info" class="ui grid">
            <div class="twelve wide column middle">{username || 'Username'}'s Stream</div>
            <div class="four wide column right aligned">
              <button class="ui red button">Subscribe</button>
            </div>
          </div>
          <div id="stream-container-content" class="ui grid">
            <video ref={this.videoRef} style={{ width: "100%" }} controls />
            <h1>{title}</h1>
            <h5>{description}</h5>
          </div>
        </div>
        <StreamChat />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchProfile, fetchStream }
)(StreamShow);
