var converter = new Showdown.converter();

var Comment = React.createClass({
    render: function() {
        var rawMarkUp = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment container-fluid">
                <strong className="commentAuthor row">{this.props.author}</strong>
                <span dangerouslySetInnerHTML={{__html: rawMarkUp}} className="col-sm-11"/>
            </div>
        )
    }
});
