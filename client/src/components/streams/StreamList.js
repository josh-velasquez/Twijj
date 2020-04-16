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
    var src = thumbnails["default"];
    let iconWidth = "40%";
    let iconHeight = "60%";
    if (stream.gametag !== undefined) {
      for (var key in thumbnails) {
        if (key === stream.gametag.toLowerCase()) {
          src = thumbnails[key];
          iconWidth = "100%";
        }
      }
    }
    if (src !== null) {
      return (
        <span>
          <img
            src={src}
            alt="large middle aligned icon camera"
            style={{
              width: iconWidth,
              height: iconHeight,
            }}
          ></img>
        </span>
      );
    }
  }

  renderList() {
    const alternatingColor = ["#3c3c3c", "#1b1b1b"];

    if (this.props.streams === undefined || this.props.streams.length === 0) {
      return (
        <div>
          <h4 className="white-text">Sorry, no streams available right now.</h4>
        </div>
      );
    } else {
      return (
        <div className="stackable three column equal height row">
          {" "}
          {this.props.streams.map((stream, index) => {
            return (
              <div
                className="column center aligned"
                style={{
                  height: "400px",
                  backgroundColor:
                    alternatingColor[index % alternatingColor.length],
                  padding: "1%",
                }}
                key={stream.userid}
              >
                <Link to={`/streams/${stream.userid}`} className="header">
                  {this.renderThumbnail(stream)}
                  <div
                    className="center aligned"
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      maxHeight: "3em",
                    }}
                  >
                    {stream.title}
                  </div>
                  <div
                    className="ui fragment content-scrollable description white-text"
                    style={{ width: "100%", height: "4em" }}
                  >
                    {stream.description}
                  </div>
                </Link>
                {this.renderAdmin(stream)}
              </div>
            );
          })}{" "}
        </div>
      );
    }
  }

  renderAdmin(stream) {
    if (stream.userid === this.props.currentUserId) {
      return (
        <div className="buttons-container">
          <Link
            to={`/streams/obssettings/${stream.userid}`}
            className="ui button primary buttons-style"
          >
            Stream Settings
          </Link>
          <Link
            to={`/streams/edit/${stream.userid}`}
            className="ui button primary buttons-style"
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.userid}`}
            className="ui button negative buttons-style"
          >
            Delete
          </Link>
        </div>
      );
    } else if (this.props.admins !== undefined) {
      if (
        this.props.admins.filter(
          (admin) => admin.userid === this.props.currentUserId
        ).length !== 0
      ) {
        return (
          <div className="buttons-container" style={{ float: "right" }}>
            <Link
              to={`/streams/delete/${stream.userid}`}
              className="ui button negative buttons-style"
            >
              Delete
            </Link>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div id="page-content" className="ui grid stackable">
        <div id="page-container">
          <div
            className="content-scrollable white-text"
            style={{ paddingLeft: 5 }}
          >
            <div>
              <h2 className="sub-header">Streams</h2>
              <div className="carousel">Div for Carousel here</div>
              <div className="ui grid container">{this.renderList()}</div>
            </div>
          </div>
        </div>
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
