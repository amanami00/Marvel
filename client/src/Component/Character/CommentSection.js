import React, { Component } from 'react'

class CommentSection extends Component {
    constructor() {
        super()
        this.state = {
            comment: ''
        }
        this.commentInput = React.createRef()
    }

    getComment = (e) => {
        e.preventDefault()
        this.setState({comment: this.commentInput.current.value})
    }

    render() {
        return (
            <div className="ui fluid action input">
                <input type="text"
                    placeholder="tell us why you love marvel..."
                    ref={this.commentInput}
                    onChange={(e) => { this.getComment(e) }} />
                <div className="ui button" onClick={(e) => { this.getComment(e) }}>Submit</div>
            </div>
        )
    }

}

export default CommentSection;