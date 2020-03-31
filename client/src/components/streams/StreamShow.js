import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import { playVideo } from "./StreamVideo";

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

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    return <div id="streamPlayer">{playVideo(this.props.stream)}</div>;
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        {/* <video ref={this.videoRef} style={{ width: "100%" }} controls /> */}
        {this.buildPlayer()}
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
