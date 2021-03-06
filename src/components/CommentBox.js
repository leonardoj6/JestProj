import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
// import { saveComment } from "actions";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = { comment: "" };

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  }

  render() {
    return (
      <div className="container">
        <form className="mb-1" onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button className="btn btn-primary">Submit Comment</button>
          </div>
        </form>
        <button
          className="btn btn-secondary fetch-comment"
          onClick={this.props.fetchComment}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
  // { saveComment }
)(CommentBox);
