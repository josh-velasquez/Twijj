import React from "react";
import { connect } from "react-redux";
import { fetchStreams, fetchAdmins } from "../../actions";
import { Link } from "react-router-dom";
import thumbnails from "../../assets/thumbnails.json";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
    this.props.fetchAdmins();
  }

  renderThumbnail(stream) {
    var src = null;
    if (stream.gametag !== undefined) {
      for (var key in thumbnails) {
        if (key === stream.gametag.toLowerCase()) {
          src = thumbnails[key];
        }
      }
    }
    if (src !== null) {
      return (
        <img
          src={src}
          alt="large middle aligned icon camera"
          width="30px"
          height="30px"
        ></img>
      );
    } else {
      return <i className="large middle aligned icon camera" />;
    }
  }

  renderList() {
    if (this.props.streams === undefined || this.props.streams.length === 0) {
      return (
        <div>
          <h4>Sorry, no streams available right now.</h4>
        </div>
      );
    } else {
      return (<div class="three column row"> {this.props.streams.map((stream) => {
        return (
          <div className="column center aligned" key={stream.userid}>
            {this.renderAdmin(stream)}
            {this.renderThumbnail(stream)}
            <div className="center aligned" style={{width:"100%",overflow:"hidden",maxHeight:"3em"}}>
              <Link to={`/streams/${stream.userid}`} className="header">
                {stream.title}
              </Link>
            </div>
            <div className="description" style={{width:"100%",overflow:"hidden",height:"4em"}}>{stream.description}</div>
          </div>
        );
      })} </div>)
    }
  }

  renderAdmin(stream) {
    if (stream.userid === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/obssettings/${stream.userid}`}
            className="ui button primary"
          >
            Stream Settings
          </Link>
          <Link
            to={`/streams/edit/${stream.userid}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.userid}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    } else if (this.props.admins !== undefined) {
      if (
        this.props.admins.filter(
          (admin) => admin.adminid === this.props.currentUserId
        ).length !== 0
      ) {
        return (
          <div className="right floated content">
            <Link
              to={`/streams/delete/${stream.userid}`}
              className="ui button negative"
            >
              Delete
            </Link>
          </div>
        );
      }
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div class="carousel">Div for Carousel here</div>
        <div className="ui relaxed grid">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    admins: state.profiles.admins,
  };
};
export default connect(mapStateToProps, { fetchStreams, fetchAdmins })(
  StreamList
);
