import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

class CommentSection extends Component {
    constructor() {
        super()
        this.state = {
            comment: ''
        }
        this.commentInput = React.createRef()
    }

    // getComment = (e) => {
    //     e.preventDefault()
    //     if (this.props.isSignedIn)
    //         this.setState({ comment: this.commentInput.current.value })
    //     else {
    //         return (
    //             <div>Please Signin first</div>
    //         )
    //     }
    // }

    renderInput = formProps => {
        return (
            <Fragment>
                <input type="text"
                    placeholder="tell us why you love marvel..."
                    ref={this.commentInput}
                    {...formProps.input}
                />
                {this.renderError(formProps.meta)}
            </Fragment>

        )
    }

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return (
                <div class="ui pointing red basic label error">
                    <div class="header">{meta.error}</div>
                </div>
            )
        }
    }

    onSubmit = formValue => {
        console.log(formValue, 'myform') // i get the typed comment here
    }

    render() {
        return (
            <Fragment>
                <form className="ui fluid action input" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='comment' component={this.renderInput} />
                    <div className="ui button" onClick={this.props.handleSubmit(this.onSubmit)}>Submit</div>
                </form>
            </Fragment>

        )
    }

}

const validate = (formValues) => {
    let error = {}
    if (!formValues.comment) {
        error.comment = 'comment should not be blank' //error.<key>, key should be same as the name of the field for which validation is to be done
    }
    if(!this.props.isSignedIn) {
        error.comment = 'You should sign first'
    }
    return error;
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

CommentSection = connect(mapStateToProps, {})(CommentSection);

export default reduxForm({
    form: 'commentForm', // redux form will start storing data in state with commentForm as key
    validate // validate function will be called when the form initially renders & each time user interacts with the form
})(CommentSection)