var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            return;
        }
        // send request to server
        this.props.onCommentSubmit({author: author, text: text});
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit} className="col-sm-6">
                <div className="form-group">
                    <label for="authorName" className="control-label">Author</label>
                    <input type="text" ref="author" name="authorName" placeholder="Your name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="comment" className="control-label">Comment</label>
                    <textarea name="comment" placeholder="Your comment" ref="text" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default form-control">Submit</button>
                </div>
            </form>
        )
    }
})
