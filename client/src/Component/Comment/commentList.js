import React, { Component } from "react";
import { db } from "../api";

class CommentList extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        db.get('/comments').then(result => {
            this.setState({ comments: result.data.data })
        })
    }

    render() {
        console.log(this.state.comments)
        return (
            <div className="ui comments background-image" style={{ "maxWidth": "100%" }}>
                <h3 className="ui dividing header logo font">Comments</h3>
                {this.state.comments.map(comment => {
                    return (
                        <div className="comment" style={{ "backgroundColor": "grey" }}>
                            <div className="content">
                                <a className="author font-size commentText comment-header">{comment.userName}</a>
                                <div className="text commentText comment-val">
                                    {comment.comment}
                                </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        )
    }
}

export default CommentList
