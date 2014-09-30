var React = require('react');

var GCalLocation = React.createClass({
  render:function(){
    return (      
      <p>{this.props.displayName}</p>
    );
  }
});


module.exports = GCalLocation;