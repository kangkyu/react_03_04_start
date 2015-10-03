var Note = React.createClass({
    render: function() {
        return (
            <div className="note">
                <p></p>
                <span>
                    <button></button>
                    <button></button>
                </span>
            </div>
            );
    }
});

React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));
