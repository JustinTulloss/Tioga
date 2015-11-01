var React = require('react');
var Data = require('./data');

var Thing = React.createClass({
    getInitialState: function() {
        return {
            thing: this.props.thing
        };
    },
    toggleComplete: function(e) {
        if (this.refs.completeCheckbox) {
            this.state.thing.complete = true
        } else {
            this.state.thing.complete = false
        }
        this.state.thing.DSSave().then(function(thing) {
            this.setState({
                thing: thing
            });
        }.bind(this));
    },
    render: function() {
        return <div className="row">
        <div className="col-md-1"><span className="glyphicon glyphicon-star" /></div>
        <div className="col-md-1"><input type="checkbox" ref="completeCheckbox" defaultChecked={ this.state.thing.complete } onChange={ this.toggleComplete } /></div>
        { this.state.thing.name }
        </div>
    }
});

module.exports = Thing;
