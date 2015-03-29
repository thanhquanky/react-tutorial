var CommentBox = React.createClass({
    handleCommentSubmit: function(comment) {
        $.ajax({
            url: this.props.url,
            dataType: "json",
            type: "POST",
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    loadCommentFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentFromServer();
        setInterval(this.loadCommentFromServer, this.props.pollInteval);
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <h2>Add your comment</h2>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
