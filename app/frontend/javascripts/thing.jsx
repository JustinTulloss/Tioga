var React = require('react');
var Data = require('./data');
var postponeThing = require('./postponeThing');

var Thing = React.createClass({
    getInitialState: function() {
        return this.getState();
    },
    getState: function() {
        var thing = Data.Thing.get(this.props.thing.id);

        return {
            thing: thing
        };
    },
    onChange: function() {
        this.setState(this.getState());
    },
    componentDidMount: function() {
        Data.Thing.on('change', this.onChange);
    },
    toggleComplete: function(e) {
        if (this.refs.completeCheckbox.checked) {
            this.state.thing.complete = true
        } else {
            this.state.thing.complete = false
        }
        this.state.thing.DSSave();
    },
    toggleLegit: function(e) {
        if (this.state.thing.legit == true) {
            this.state.thing.legit = false;
        } else {
            this.state.thing.legit = true;
        }
        this.state.thing.DSSave();
    },
    postpone: function() {
        postponeThing(this.state.thing);
    },
    actionColumn: function() {
        var cursorStyle = {
            cursor: 'pointer'
        };

        if (this.state.thing.thing_type == 'todo') {
            return <input type="checkbox" ref="completeCheckbox" defaultChecked={ this.state.thing.complete } onChange={ this.toggleComplete } style={ cursorStyle } />
        } else if (this.state.thing.thing_type == 'note') {
            return <span className="glyphicon glyphicon-info-sign" />
        } else if (this.state.thing.thing_type == 'event') {
            return <span className="glyphicon glyphicon-calendar" />
        }
    },
    render: function() {
        var style = {};
        if (!this.state.thing.legit) {
            style = {
                'textDecoration': 'line-through',
                'color': 'grey'
            };
        }

        var cursorStyle = {
            cursor: 'pointer'
        };
        

        return <div className="row">
        <div className="col-md-2">
          <span className="glyphicon glyphicon-star" style={ cursorStyle } />
          &nbsp;
          { this.actionColumn() }
          &nbsp;
          <span className="glyphicon glyphicon-remove" onClick={ this.toggleLegit } style={ cursorStyle } />
          &nbsp;
          <span className="glyphicon glyphicon-time" onClick={ this.postpone } style={ cursorStyle }/>
        </div>
        <div className="col-md-4" style={ style } >
          { this.state.thing.name }
        </div>
        </div>
    }
});

module.exports = Thing;
